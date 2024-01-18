import { CSSProperties, memo, useEffect, useState } from "react"
import style from "./ExcursionCard.module.scss"
import classNames from "classnames"

import { Image } from "shared/ui/image"
import { Text, enumStyleText } from "shared/ui/text"

interface IExcursionCardProps {
    className?: string, 
    margin?: string,
    image: string,
    title: string,
    description: string,
    price: number,
    likeSlot?: React.ReactNode,
    orderSlot?: React.ReactNode
}

export const ExcursionCard: React.FC<IExcursionCardProps> = memo((props) => {
    const {
        className,
        margin,
        description,
        image,
        price,
        orderSlot,
        likeSlot,
        title
    } = props

    const cssStyle: CSSProperties = {
        margin: margin,
    }

    const [view, setView] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setView(true)
        }, 200);
    }, [])
    
    const mods = {[style.card_view]: view}

    return(
        <div style={cssStyle} className={classNames(style.card, mods, className)}>
            <Image width="100%" height="226px" src={image}/>
            <div className={style.like_slot}>
                {likeSlot}
            </div>
            <div className={style.content}>
                <Text className={style.title} margin="0 0 10px 0" styleText={enumStyleText.TERNARY_SUBTITLE} text={title}/>
                <Text className={style.descr} margin="0 0 16px 0" styleText={enumStyleText.DESCRIPTION_TEXT} text={description}/>
                <div className={style.price}>
                    <Text fontSize={20} fontWeight={700} text={`от ${price} ₽`}/>
                    <Text margin="0 5px" styleText={enumStyleText.TERNARY_SUBTITLE} text="/"/>
                    <Text styleText={enumStyleText.DESCRIPTION_TEXT} text="с чел"/>
                </div>
                {orderSlot}
            </div>
        </div>
    )
})