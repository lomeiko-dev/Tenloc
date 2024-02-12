import { memo } from 'react'
import style from '../Review.module.scss'
import classNames from 'classnames'

import { Image, enumStyleImage } from 'shared/ui/image'
import { Text, enumStyleText } from 'shared/ui/text'
import { Link } from 'shared/ui/link'
import { ScoreView } from 'shared/ui/score-view'

import { type IReview } from '../..'
import { pathRoutes } from 'shared/config/route-path'

interface IReviewDesktopProps extends Omit<IReview, 'id' | 'userId'> {
  className?: string
}

const ReviewDesktop: React.FC<IReviewDesktopProps> = memo((props) => {
  const {
    avatar,
    cityName,
    excursionId,
    message,
    nickname,
    score,
    className
  } = props

  return (
        <div className={classNames(style.wrapper, className)}>
            <div className={style.left_part}>
                <Image
                    className={style.avatar}
                    styleImage={enumStyleImage.TERNARY}
                    src={`server${avatar}`}/>
            </div>
            <div className={style.right_part}>
                <Text
                    margin="0 0 16px 0"
                    fontSize={17} fontWeight={500}
                    text={nickname}/>
                <div className={style.info}>
                    <div className={style.tour}>
                        <Text
                            margin="0 10px 0 0"
                            color="#7B7B7B"
                            fontSize={14}
                            fontWeight={400} text="Тур: "/>
                        <Link
                            className={style.link}
                            color="#252525"
                            fontSize={14} fontWeight={400}
                            to={`${pathRoutes.excursion}/${excursionId}`}>
                                {cityName}
                        </Link>
                    </div>
                    <div className={style.score}>
                        <Text
                            margin="0 13px 0 0"
                            color="#7B7B7B"
                            fontSize={14} fontWeight={400}
                            text="Оценка "/>
                        <ScoreView score={score}/>
                    </div>
                </div>
                <Text
                    className={style.message}
                    width="565px" height="100px"
                    styleText={enumStyleText.PRIMARY_TEXT}
                    text={message}/>
            </div>
        </div>
  )
})

export default ReviewDesktop
