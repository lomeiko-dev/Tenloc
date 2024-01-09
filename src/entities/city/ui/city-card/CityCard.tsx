import { CSSProperties, memo, useEffect, useState } from "react"
import style from "./CityCard.module.scss"
import classNames from "classnames"

import { Image } from "shared/ui/image"
import { Text } from "shared/ui/text"
import { Button, enumStyleButton } from "shared/ui/button"

import { ICity } from "../../types"

interface ICityVIewProps extends Pick<ICity, "excursionCount" | "title" | "preview">{
    className?: string,
    width?: string,
    height?: string,
    margin?: string,
    onClick?: () => void,
}

export const CityView: React.FC<ICityVIewProps> = memo((props) => {
    const {
        excursionCount,
        preview,
        title,
        className,
        height,
        margin,
        width,
        onClick,
    } = props

    const [isMobile, setMobile] = useState(false);

    const resizeInnerWidthHandle = () => {
        window.innerWidth < 600 ? setMobile(true) : setMobile(false)
    }

    useEffect(() => {
        resizeInnerWidthHandle()
        window.addEventListener('resize', resizeInnerWidthHandle)
    }, [window])

    const cssStyle: CSSProperties = {
        width: width,
        height: height,
        margin: margin
    }

    return(
        <div 
            style={cssStyle} 
            className={classNames(style.wrapper, className)}>
            <div className={style.darkening} />
            <Image 
                className={style.background} 
                width="100%" height="100%" 
                src={`server/assets/${preview}`}/>
            <div className={style.content_block}>
                <Text 
                    width={isMobile ? "125px" : "200px"} 
                    margin={isMobile ? "0 0 16px 0" : "0 0 38px 0"} 
                    fontSize={isMobile ? 12 : 22} fontWeight={700} lineHeight={26} 
                    color="#FFFFFF" 
                    text={title}/>
                <Button
                    padding={isMobile ? "2px 5px" : "10px 20px"}
                    onClick={onClick} 
                    fontSize={isMobile ? 10 : 13} fontWeight={500} 
                    styleButton={enumStyleButton.PRIMARY}>
                        {excursionCount} экскурсий
                </Button>
            </div>
        </div>
    )
})