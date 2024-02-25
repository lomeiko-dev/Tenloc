import { memo } from 'react'
import classNames from 'classnames'
import style from '../ReviewsBlock.module.scss'

import { Text, enumStyleText } from 'shared/ui/text'
import { ReviewSlider } from '../reviews-slider/ReviewSlider'
import { Button, enumStyleButton } from 'shared/ui/button'

import { IReviewProps } from './types'

interface IProps extends Omit<IReviewProps, 'description'>{}

const ReviewMobile: React.FC<IProps> = memo((props) => {
   const {
      isShowTitleBlock = false,
      isMobile,
      onOpenModal,
      className,
      limit,
      sortValue,
   } = props

   return (
      <div className={classNames(style.review_mobile, className)}>
         <Text
            className={style.title}
            margin="0 0 21px 0"
            styleText={enumStyleText.TERNARY_TITLE}
            text="Отзывы"
         />
         <ReviewSlider
            sortValue={sortValue}
            limit={limit}
            isMobile={isMobile}
         />
         {isShowTitleBlock && (
            <Button
               onClick={onOpenModal}
               padding={isMobile ? '16px 22px' : '18px 25px'}
               height="55px"
               styleButton={enumStyleButton.PRIMARY}>
               Оставить отзыв
            </Button>
         )}
      </div>
   )
})

export default ReviewMobile
