import { memo, useCallback, useState } from "react";
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
    getValue: (value: number) => void,
    maxValue: number,
    isShowViewValue?: boolean,
    margin?: string,
    position?: enumPositionSliderManagment,
    isButtonSides?: boolean
}

export const SliderManagment: React.FC<ISliderManagmentProps> = memo((props) => {
    const {
        getValue,
        maxValue,
        isShowViewValue,
        margin,
        position = enumPositionSliderManagment.NONE,
        isButtonSides = false,
    } = props

    const [value, setValue] = useState(0);

    const valueHandle = useCallback((count: number) => {
        let score = count;
        if(count === maxValue)
            score = 0;
        else if(count < 0)
            score = 0

        setValue(score);
        getValue(score)
    }, [maxValue]);

    return(
        <div className={style.wrap}>
            <div style={{margin: margin}} className={classNames(style.content, style[position])}>
                {isButtonSides ? 
                    <button 
                        onClick={() => valueHandle(value-1)} 
                        className={style.btn}>
                        <ArrowNextIcon/>
                    </button> : undefined}
                {isShowViewValue &&
                    <div className={style.dot_wrap}>
                        {Array.from({length: maxValue}, (_, index) => 
                        <span 
                            onClick={() => valueHandle(index)} 
                            className={classNames(style.dot, index === value ? style.dot_select : undefined)}>
                        </span>)}
                    </div>}
                {isButtonSides ? undefined : 
                    <button 
                        onClick={() => valueHandle(value-1)} 
                        className={style.btn}>
                        <ArrowNextIcon/>
                    </button>}
                <button 
                    onClick={() => valueHandle(value+1)} 
                    className={style.btn}>
                    <ArrowPrevIcon/>
                </button>
            </div>
        </div>
    )
})