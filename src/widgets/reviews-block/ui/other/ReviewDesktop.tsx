import { memo } from 'react'
import style from '../ReviewsBlock.module.scss'
import { Text, enumStyleText } from 'shared/ui/text'
import { Button, enumStyleButton } from 'shared/ui/button'
import { ReviewSlider } from '../reviews-slider/ReviewSlider'
import classNames from 'classnames'
import { IReviewProps } from './types'

const ReviewDesktop: React.FC<IReviewProps> = memo((props) => {
   const {
      isMobile,
      className,
      description,
      isShowTitleBlock,
      limit = 5,
      sortValue,
      onOpenModal,
   } = props

   return (
      <div className={classNames(style.review_desktop, className)}>
         <div className={style.left_part}>
            {isShowTitleBlock && (
               <>
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
                     onClick={onOpenModal}
                     padding={isMobile ? '16px 22px' : '18px 25px'}
                     height="55px"
                     styleButton={enumStyleButton.PRIMARY}>
                     Оставить отзыв
                  </Button>
               </>
            )}
         </div>

         <ReviewSlider
            sortValue={sortValue}
            limit={limit}
            isMobile={isMobile}
         />
      </div>
   )
})

export default ReviewDesktop
