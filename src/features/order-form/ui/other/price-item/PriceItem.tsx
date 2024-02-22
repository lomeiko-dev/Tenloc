import { Text } from "shared/ui/text";
import style from "./PriceItem.module.scss"
import React, { memo } from "react";
import { Counter } from "shared/ui/counter";

interface IPriceItemProps {
    name: string,
    price: number,
    onChangeValue: (value: number) => void
}

export const PriceItem: React.FC<IPriceItemProps> = memo((props) => {
    const {
        name,
        onChangeValue,
        price
    } = props

    return(
        <div className={style.item}>
            <Text fontSize={14} fontWeight={500} text={name}/>
            <Text 
                className={style.price}
                fontSize={14} fontWeight={600} 
                text={`${price} ₽`}/>
            <Counter isNegativeValue setValue={onChangeValue}/>
        </div>
    )   
})