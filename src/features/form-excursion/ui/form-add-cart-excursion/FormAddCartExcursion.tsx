import style from "./FormAddCartExcursion.module.scss"

import { Button, enumStyleButton } from "shared/ui/button";
import { Dropwdown } from "shared/ui/dropdown";
import { Text } from "shared/ui/text";

import { memo, useEffect, useState } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "shared/lib/hooks/useAppSelector";

import { addToCart, cartSelection, removeToCart, saveCart } from "entities/cart";

import DecrimentIcon from "shared/assets/img/svg-icon/decriment.svg?react";
import IncrementIcon from "shared/assets/img/svg-icon/increment.svg?react";

interface IFromAddCartExcursionProps{
    dates: string[]
    id: string,
    price: number,
    title: string,
    isMobile?: boolean,
}

export const FormAddCartExcursion: React.FC<IFromAddCartExcursionProps> = memo((props) => {
    const {
        dates,
        id,
        price,
        title,
        isMobile = false
    } = props

    const dispatch = useAppDispatch();
    const cart = useAppSelector(cartSelection);

    const [date, setDate] = useState<string | undefined>(undefined)
    const [isError, setError] = useState(false);

    const isCartById = () => cart.find(item => item.excursionId === id) ? true : false 

    const toggleCartHandle = () => {
        if(date){
            if(isCartById()){
                dispatch(removeToCart(id))
                setDate(undefined)
            }
            else{
                dispatch(addToCart({
                    date: date, 
                    excursionId: id, 
                    price: price, 
                    title: title}))
            }
            dispatch(saveCart());
        }
        else
            setError(true)
    }

    useEffect(() => {
        if(date === undefined){
            const cartItem = cart.find(item => item.excursionId === id);
            setDate(cartItem?.date)
        }
    })

    return (
        <div className={style.form}>
            <Dropwdown 
                className={isCartById() ? style.lock : undefined}
                width={isMobile ? '100%' : undefined}
                height={isMobile ? '33px' : undefined}
                border="1px solid #E9E9E9" borderRadius="20px" 
                fontSize={12}
                padding="7px 13px" 
                content={
                    <div className={style.dropdown_content}>
                        {dates.map(item => 
                            <div 
                                key={item}
                                onClick={() => setDate(item)}
                                className={style.content_item}>{item}</div>)}
                    </div>}>
                    {date ? 
                        date : 
                        <Text 
                            color={isError ? 'red' : '#333'} 
                            text={date === undefined ? 'Выбрать время' : date}/>}
            </Dropwdown>
            {isMobile ?
                <Button 
                    onClick={toggleCartHandle}
                    fontSize={12} fontWeight={500}
                    padding="8px"
                    styleButton={enumStyleButton.PRIMARY}>
                        {isCartById() ?
                            'Удалить' :
                            'Добавить в заказ'}
                </Button> : 
                <div className={style.btn_wrapper}>
                    <Button
                        onClick={toggleCartHandle}
                        className={style.btn}
                        width="46px" height="46px"
                        bgColor={isCartById() ? '#FFD600' : '#E9E9E9'} HoverBgColor="#E9E9E960"
                        padding="3px 0 0 0"
                        borderRadius='100px'>
                            {isCartById() ?
                                <DecrimentIcon/> :
                                <IncrementIcon/>}
                    </Button>
                </div>}
        </div>
    )
})