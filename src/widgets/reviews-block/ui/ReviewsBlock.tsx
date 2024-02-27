import { memo, useCallback, useState } from 'react'
import { useLazyGetExcursionByNameQuery } from 'features/sort-excursion'

import { FormAddReviewLazy } from 'features/form-add-review'
import { Modal } from 'shared/ui/modal'
import { Loader } from 'shared/ui/loader'
import debounce from 'lodash.debounce'
import { ReviewDesktopLazy, ReviewMobileLazy } from './other'
import { useAuth } from 'shared/lib/hooks/useAuth'
import { AuthModal } from 'features/auth'

interface IReviewsProps {
   className?: string
   margin?: string
   isMobile?: boolean
   isSmallMobile?: boolean
   description?: string
   isShowTitleBlock?: boolean
   sortValue?: string
}

export const ReviewsBlock: React.FC<IReviewsProps> = memo((props) => {
   const {
      className,
      margin,
      isMobile,
      description,
      isShowTitleBlock = false,
      isSmallMobile,
      sortValue,
   } = props

   const [openModal, setOpenModal] = useState(false)
   const [search, setSearch] = useState('')
   const [openLoginModal, setOpenLoginModal] = useState(false)
   const { isAuth } = useAuth()

   const [triggerExcursion, resultExcursion] = useLazyGetExcursionByNameQuery()

   const clickOpenModalHandle = useCallback(() => {
      if (!isAuth) {
         setOpenLoginModal(true)
      } else setOpenModal(true)
   }, [isAuth])

   const getExcursionByNameQuery = useCallback(
      debounce((text: string) => {
         triggerExcursion({
            page: 1,
            limit: 20,
            text: text,
         })
      }, 300),
      []
   )

   if (isMobile === undefined) return null

   return (
      <div style={{ margin }}>
         {isMobile ? (
            <ReviewMobileLazy
               limit={7}
               sortValue={sortValue}
               className={className}
               isShowTitleBlock={isShowTitleBlock}
               isMobile={isMobile}
               onOpenModal={clickOpenModalHandle}
            />
         ) : (
            <ReviewDesktopLazy
               limit={5}
               sortValue={sortValue}
               className={className}
               isShowTitleBlock={isShowTitleBlock}
               description={description}
               isMobile={isMobile}
               onOpenModal={clickOpenModalHandle}
            />
         )}

         {isShowTitleBlock && (
            <Modal
               lazy
               loadingComponent={<Loader isCenter />}
               width={isMobile ? '100%' : '70%'}
               height={isMobile ? '100%' : '700px'}
               onClose={() => setOpenModal(false)}
               open={openModal}>
               <FormAddReviewLazy
                  isSmallMobile={isSmallMobile}
                  isLoadingExcursion={resultExcursion.isLoading}
                  isErrorExursion={resultExcursion.isError}
                  onCloseModal={() => {
                     setOpenModal(false)
                  }}
                  onChangeValueSearch={(text: string) => {
                     setSearch(text)
                     getExcursionByNameQuery(text)
                  }}
                  valueSearch={search}
                  excursions={resultExcursion.data || []}
               />
            </Modal>
         )}
         {openLoginModal && (
            <AuthModal onCloseModal={() => setOpenLoginModal(false)} />
         )}
      </div>
   )
})
