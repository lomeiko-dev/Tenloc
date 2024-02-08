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

interface IHeaderProps {
  isMobile?: boolean
  isSmallMobile?: boolean
}

export const Header: React.FC<IHeaderProps> = memo((props) => {
  const {
    isMobile = false,
    isSmallMobile = false
  } = props

  const [openSidebar, setOpenSidebar] = useState(false)
  const [isMountedSidebar, setMountedSidebar] = useState(false)

  useEffect(() => {
    if (openSidebar) { setMountedSidebar(true) }
  })

  return (
        <header className={style.header}>
            {isMobile &&
                <>
                    <Button
                        onClick={() => { setOpenSidebar(true) }}
                        width="20px"
                        margin="0 15px 0 0">
                            <BurgerMenuIcon/>
                    </Button>
                        {isMountedSidebar &&
                            <Suspense fallback={<Loader isCenter/>}>
                                <SideBarLazy
                                    onClose={() => { setOpenSidebar(false) }}
                                    isOpen={openSidebar}/>
                            </Suspense>}
                </>}
            <Logotype/>

            <div className={style.right_part}>
                {!isMobile &&
                    <DropdownCity/>}

                {!isMobile &&
                    <Navbar/>}

                {!isSmallMobile &&
                    <div className={style.btns}>
                        <Button
                            width={isMobile ? '35px' : '50px'} height={isMobile ? '35px' : '50px'}
                            styleButton={enumStyleButton.SECONDARY}>
                                <LikeIcon width={isMobile ? '15px' : '40px'}/>
                        </Button>
                        <Button
                            height={isMobile ? '35px' : '50px'} width={isMobile ? '75px' : '114px'}
                            styleButton={enumStyleButton.SECONDARY}>
                                Войти
                        </Button>
                    </div>}
            </div>
        </header>
  )
})
