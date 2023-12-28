import { CSSProperties, memo, useCallback, useState } from "react";
import style from "./Carousel.module.scss"
import classNames from "classnames";

import { useInView } from "react-intersection-observer";

import ArrowLeft from "shared/assets/img/svg-icon/arrow-left.svg?react";
import ArrowRight from "shared/assets/img/svg-icon/arrow-right.svg?react"

interface ICarouselProps {
    content: React.ReactNode[],
    className?: string,
    valueSkipPx?: number,
    margin?: string,
    width?: string,
    height?: string,
}

export const Carousel: React.FC<ICarouselProps> = memo((props) => {
    const {
        content,
        className,
        valueSkipPx = 100,
        height,
        margin,
        width
    } = props

    const [position, setPosition] = useState(0);

    const [refRight, inViewRight] = useInView();
    const [refLeft, inViewLeft] = useInView();

    const leftHandle = useCallback(() => {
        setPosition(position-valueSkipPx)

        if(inViewRight){
            setPosition(0)
        }
    }, [inViewRight, position, valueSkipPx])

    const rightHandle = useCallback(() => {
        setPosition(position+valueSkipPx)

        if(inViewLeft){
            setPosition(0)
        }
    }, [inViewLeft, position, valueSkipPx])

    const cssStyles: CSSProperties = {
        margin: margin,
        width: width,
        height: height,
    }

    return(
        <div 
            style={cssStyles} 
            className={classNames(style.wrapper, className)}>
            <button 
                onClick={rightHandle} 
                className={classNames(style.btn, style.btn_right)}>
                <ArrowRight/>
            </button>
            <button 
                onClick={leftHandle} 
                className={classNames(style.btn, style.btn_left)}>
                <ArrowLeft/>
            </button>
            <div 
                style={{left: `${position}px`}} 
                className={style.content}>
                <div ref={refLeft}/>
                {content.map(item => 
                    <div className={style.content_wrap}>
                        {item}
                    </div>)}
                <div ref={refRight}/>
            </div>
        </div>
    )
})