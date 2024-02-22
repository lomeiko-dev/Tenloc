import { memo, useCallback, useState } from 'react'
import style from './ReviewsBlock.module.scss'
import { useLazyGetExcursionByNameQuery } from 'features/sort-excursion'

import { FormAddReviewLazy } from 'features/form-add-review'
import { Button, enumStyleButton } from 'shared/ui/button'
import { Modal } from 'shared/ui/modal'
import { Text, enumStyleText } from 'shared/ui/text'
import { ReviewSlider } from 'widgets/reviews-block'
import { Loader } from 'shared/ui/loader'
import debounce from 'lodash.debounce'
import classNames from 'classnames'

const LIMIT_DESKTOP = 5
const LIMIT_MOBILE = 7

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

   const [triggerExcursion, resultExcursion] = useLazyGetExcursionByNameQuery()

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

   const ReviewSliderComponent = (
      <ReviewSlider
         sortValue={sortValue}
         limit={isMobile ? LIMIT_MOBILE : LIMIT_DESKTOP}
         isMobile={isMobile}
      />
   )

   if (isMobile === undefined) return null

   return (
      <div
         style={{ margin }}
         className={classNames(
            isMobile ? style.reviews_mobile : style.reviews,
            className
         )}>
         {isMobile ? (
            <>
               {isShowTitleBlock && (
                  <Text
                     className={style.title}
                     margin="0 0 21px 0"
                     styleText={enumStyleText.TERNARY_TITLE}
                     text="Отзывы"
                  />
               )}

               {ReviewSliderComponent}
               {isShowTitleBlock && (
                  <Button
                     onClick={() => {
                        setOpenModal(true)
                     }}
                     padding={isMobile ? '16px 22px' : '18px 25px'}
                     height="55px"
                     styleButton={enumStyleButton.PRIMARY}>
                     Оставить отзыв
                  </Button>
               )}
            </>
         ) : (
            <>
               {isShowTitleBlock && (
                  <div className={style.left_part}>
                     <Text
                        className={style.title}
                        margin="0 0 21px 0"
                        styleText={enumStyleText.TERNARY_TITLE}
                        text="Отзывы"
                     />
                     <Text
                        width="100%"
                        styleText={enumStyleText.PRIMARY_TEXT}
                        margin="0 0 68px 0"
                        text={description || ''}
                     />
                     <Button
                        onClick={() => {
                           setOpenModal(true)
                        }}
                        padding={isMobile ? '16px 22px' : '18px 25px'}
                        height="55px"
                        styleButton={enumStyleButton.PRIMARY}>
                        Оставить отзыв
                     </Button>
                  </div>
               )}
               {ReviewSliderComponent}
            </>
         )}

         {isShowTitleBlock && (
            <Modal
               lazy
               loadingComponent={<Loader isCenter />}
               width={isMobile ? '100%' : '70%'}
               height={isMobile ? '100%' : '700px'}
               onClose={() => {
                  setOpenModal(false)
               }}
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
      </div>
   )
})
