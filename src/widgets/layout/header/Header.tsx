import { Suspense, memo, useEffect, useState } from 'react'
import style from './Header.module.scss'

import { Navbar } from '../navbar/Navbar'
import { Button, enumStyleButton } from 'shared/ui/button'
import { SideBarLazy } from '../sidebar'
import { Logotype } from 'shared/ui/logotype'
import { Loader } from 'shared/ui/loader'

import LikeIcon from 'shared/assets/img/svg-icon/like.svg?react'
import BurgerMenuIcon from 'shared/assets/img/svg-icon/burger-menu.svg?react'
import { DropdownCity } from '../other/dropdown-city/DropdownCity'
import { Modal } from 'shared/ui/modal'
import { AuthForm } from 'features/auth'
import { useAuth } from 'shared/lib/hooks/useAuth'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { removeAuth } from 'entities/auth'

interface IHeaderProps {
   isMobile?: boolean
   isSmallMobile?: boolean
}

export const Header: React.FC<IHeaderProps> = memo((props) => {
   const { isMobile = false, isSmallMobile = false } = props

   const [openSidebar, setOpenSidebar] = useState(false)
   const [openAuthModal, setOpenAuthModal] = useState(false)
   const [isMountedSidebar, setMountedSidebar] = useState(false)
   const dispatch = useAppDispatch()

   const { isAuth } = useAuth()

   console.log(isAuth)

   useEffect(() => {
      if (openSidebar) {
         setMountedSidebar(true)
      }
   })

   return (
      <header className={style.header}>
         {isMobile && (
            <>
               <Button
                  onClick={() => {
                     setOpenSidebar(true)
                  }}
                  width="20px"
                  margin="0 15px 0 0">
                  <BurgerMenuIcon />
               </Button>
               {isMountedSidebar && (
                  <Suspense fallback={<Loader isCenter />}>
                     <SideBarLazy
                        onClose={() => {
                           setOpenSidebar(false)
                        }}
                        isOpen={openSidebar}
                     />
                  </Suspense>
               )}
            </>
         )}
         <Logotype />

         <div className={style.right_part}>
            {!isMobile && <DropdownCity />}

            {!isMobile && <Navbar />}

            {!isSmallMobile && (
               <div className={style.btns}>
                  <Button
                     width={isMobile ? '35px' : '50px'}
                     height={isMobile ? '35px' : '50px'}
                     styleButton={enumStyleButton.SECONDARY}>
                     <LikeIcon width={isMobile ? '15px' : '40px'} />
                  </Button>
                  {isAuth ? (
                     <Button
                        onClick={() => dispatch(removeAuth())}
                        height={isMobile ? '35px' : '50px'}
                        width={isMobile ? '75px' : '114px'}
                        styleButton={enumStyleButton.SECONDARY}>
                        Выйти
                     </Button>
                  ) : (
                     <Button
                        onClick={() => setOpenAuthModal(true)}
                        height={isMobile ? '35px' : '50px'}
                        width={isMobile ? '75px' : '114px'}
                        styleButton={enumStyleButton.SECONDARY}>
                        Войти
                     </Button>
                  )}
               </div>
            )}
         </div>
         <Modal
            lazy
            width="480px"
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}>
            <AuthForm onClosedModal={() => setOpenAuthModal(false)} />
         </Modal>
      </header>
   )
})
