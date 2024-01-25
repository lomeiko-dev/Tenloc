import { Image } from "shared/ui/image"
import style from "./ExcursionItem.module.scss"
import { memo, useEffect, useState } from "react"
import { Text, enumStyleText } from "shared/ui/text"
import classNames from "classnames"

interface IExcursionItemProps {
    className?: string,
    margin?: string,
    image: string,
    name: string,
    description: string,
    price: number
}

export const ExcursionItem: React.FC<IExcursionItemProps> = memo((props) => {
    const {
        className,
        margin,
        description,
        image,
        price,
        name,
    } = props

    const [isHidePrice, setHidePrice] = useState(false)
    const [isHideDescription, setHideDescription] = useState(false)
    const [isHideImage, setHideImage] = useState(false)

    const resizeInnerWidthHandle = () => {
        window.innerWidth < 700 ? setHidePrice(true) : setHidePrice(false)
        window.innerWidth < 600 ? setHideDescription(true) : setHideDescription(false)
        window.innerWidth < 350 ? setHideImage(true) : setHideImage(false)
    }

    useEffect(() => {
        resizeInnerWidthHandle()
        window.addEventListener('resize', resizeInnerWidthHandle)

        return () => {
            window.removeEventListener('resize', resizeInnerWidthHandle)
        }
    }, [window])

    return (
        <div 
            style={{margin: margin}} 
            className={classNames(style.item, className)}>
            <div className={style.left_part}>
                {!isHideImage &&
                    <Image className={style.image} src={`server${image}`}/>}
                <div className={style.info}>
                    <Text 
                        className={style.title} 
                        height="40px" width="500px" 
                        styleText={enumStyleText.TERNARY_SUBTITLE} 
                        text={name}/>
                    {!isHideDescription &&
                        <Text 
                            lineHeight={23} 
                            margin="10px 0 0 0" 
                            width="450px" height="40px"
                            styleText={enumStyleText.DESCRIPTION_TEXT} 
                        text={description}/>}
                </div>
            </div>
            {!isHidePrice &&
                <Text className={style.price} fontSize={22} fontWeight={700} text={`${price}₽`}/>}
        </div>
    )
})