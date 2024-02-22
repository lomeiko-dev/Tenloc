import { Text } from "shared/ui/text";
import style from "./PriceSlice.module.scss"
import { memo } from "react";
import classNames from "classnames";

interface IPriceSliceProps {
    title: string,
    price: number,
    className?: string
}

export const PriceSlice: React.FC<IPriceSliceProps> = memo((props) => {
    const {
        price,
        title,
        className
    } = props
    
    return(
        <div className={classNames(style.price_slice, className)}>
            <Text fontSize={14} fontWeight={400} text={title}/>
            <Text className={style.price} fontSize={14} fontWeight={700} text={`${price} ₽`}/>
        </div>
    )   
})