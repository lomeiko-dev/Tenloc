import { memo } from 'react'
import style from '../Review.module.scss'
import classNames from 'classnames'

import { Text, enumStyleText } from 'shared/ui/text'
import { Image, enumStyleImage } from 'shared/ui/image'

import { type IReview } from 'entities/reviews'
import { ScoreView } from 'shared/ui/score-view'

interface IReviewMobileProps extends Omit<IReview, 'id' | 'userId' | 'cityName' | 'excursionId'> {
  className?: string
}

const ReviewMobile: React.FC<IReviewMobileProps> = memo((props) => {
  const {
    avatar,
    message,
    nickname,
    score,
    className
  } = props

  return (
        <div className={classNames(style.wrapper_mobile, className)}>
            <Image
                margin="0 0 12px 0"
                width="91px" height="91px"
                styleImage={enumStyleImage.TERNARY}
                src={`server${avatar}`}/>
            <div className={style.info_mobile}>
                <Text
                    fontSize={17} fontWeight={500}
                    text={nickname}/>
                <ScoreView width="100px" score={score}/>
            </div>
            <Text
                className={style.message}
                isCentered
                width="100%" height="154px"
                styleText={enumStyleText.PRIMARY_TEXT}
                text={message}/>
        </div>
  )
})

export default ReviewMobile
