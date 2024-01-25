import { memo } from "react";
import style from "./Slider.module.scss";

import classNames from "classnames";

import ArrowPrevIcon from "shared/assets/img/svg-icon/arrrow-prew.svg?react";
import ArrowNextIcon from "shared/assets/img/svg-icon/arrow-next.svg?react";

export enum enumPositionSliderManagment {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
    NONE = 0,
}

interface ISliderManagmentProps {
    className?: string,
    onGetValue?: (index: number) => void,
    onClickNext?: () => void,
    onClickPrev?: () => void,
    indexDotted?: number,
    maxValue: number,
    isShowViewValue?: boolean,
    isHideButtons?: boolean,
    margin?: string,
    position?: enumPositionSliderManagment,
    isButtonSides?: boolean
}

export const SliderManagment: React.FC<ISliderManagmentProps> = memo((props) => {
    const {
        className,
        onGetValue,
        indexDotted = 0,
        maxValue,
        isShowViewValue,
        margin,
        position = enumPositionSliderManagment.NONE,
        isButtonSides = false,
        onClickNext,
        isHideButtons,
        onClickPrev
    } = props

    return(
        <div className={classNames(style.wrap, className)}>
            <div style={{margin: margin}} className={classNames(style.content, style[position])}>
                {isButtonSides ? 
                    !isHideButtons &&
                        <button 
                            onClick={onClickPrev}
                            className={style.btn}>
                                <ArrowNextIcon/>
                        </button> : undefined}
                {isShowViewValue &&
                    <div className={style.dot_wrap}>
                        {Array.from({length: maxValue}, (_, index) => 
                        <span 
                            key={index}
                            onClick={() => onGetValue && onGetValue(index)} 
                            className={classNames(style.dot, index === indexDotted ? style.dot_select : undefined)}>
                        </span>)}
                    </div>}
                {!isHideButtons &&
                    <>
                        {isButtonSides ? 
                            undefined : 
                            <button 
                                onClick={onClickPrev}
                                className={style.btn}>
                                    <ArrowNextIcon/>
                            </button>}
                        <button 
                            onClick={onClickNext}
                            className={style.btn}>
                            <ArrowPrevIcon/>
                        </button>
                    </>}
            </div>
        </div>
    )
})