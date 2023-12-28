import { memo, useCallback, useState } from "react";
import style from "./Counter.module.scss"
import classNames from "classnames";

import IncrementIcon from "shared/assets/img/svg-icon/increment.svg?react";
import DecrementIcon from "shared/assets/img/svg-icon/decriment.svg?react"

interface ICounterProps {
    setValue: (value: number) => void,
    className?: string,
    defaultValue?: number,
    margin?: string,
    isNegativeValue?: boolean
}

export const Counter: React.FC<ICounterProps> = memo((props) => {
    const {
        setValue,
        className,
        defaultValue = 0,
        margin,
        isNegativeValue
    } = props

    const [num, setNum] = useState<number>(defaultValue);

    const changeNumHandle = useCallback((value: number) => {
        if(isNegativeValue && value < 0){
            return
        }

        setNum(value);
        setValue(value);
    }, [isNegativeValue])

    return(
        <div 
            className={classNames(style.wrap, className)} 
            style={{margin: margin}}>
            <button 
                onClick={() => changeNumHandle(num+1)} 
                className={style.button}>
                <IncrementIcon/>
            </button>
            <span className={style.value}>{num}</span>
            <button 
                onClick={() => changeNumHandle(num-1)} 
                className={style.button}>
                <DecrementIcon/>
            </button>
        </div>
    )
})