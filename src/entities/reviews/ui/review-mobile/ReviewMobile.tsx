import { CSSProperties } from "react"
import style from "../Review.module.scss"
import classNames from "classnames"

import { Text, enumStyleText } from "shared/ui/text"
import { Image, enumStyleImage } from "shared/ui/image"

import { IReview } from "entities/reviews"
import { ScoreView } from "shared/ui/score-view"

interface IReviewMobileProps extends 
    Omit<IReview, 'id' | 'userId' | 'cityName' | 'excursionId'> {
    className?: string,
    width?: string,
    height?: string,
    margin?: string,
}


export const ReviewMobile: React.FC<IReviewMobileProps> = (props) => {
    const {
        avatar,
        message,
        nickname,
        score,
        className,
        height,
        margin,
        width
    } = props
    
    const cssStyle: CSSProperties = {
        width: width,
        height: height,
        margin: margin
    }

    return(
        <div style={cssStyle} className={classNames(style.wrapper_mobile, className)}>
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
                width="300px" height="154px"
                styleText={enumStyleText.PRIMARY_TEXT} 
                text={message}/>
        </div>
    )
}