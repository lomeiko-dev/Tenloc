import React, { CSSProperties, memo, useCallback, useEffect, useState } from 'react'
import style from './FormAddCartExcursion.module.scss'
import classNames from 'classnames'

import { Button, enumStyleButton } from 'shared/ui/button'
import { Dropwdown } from 'shared/ui/dropdown'
import { Text } from 'shared/ui/text'

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'

import { addToCart, cartSelection, removeToCart, saveCart } from 'entities/cart'

import DecrimentIcon from 'shared/assets/img/svg-icon/decriment.svg?react'
import IncrementIcon from 'shared/assets/img/svg-icon/increment.svg?react'

interface IFromAddCartExcursionProps {
  dates: string[]
  id: string
  price: number
  title: string
  previewImage: string
  isMobile?: boolean,
  className?: string,
  width?: string,
  height?: string,
  margin?: string
}

export const FormAddCartExcursion: React.FC<IFromAddCartExcursionProps> = memo((props) => {
  const {
    dates,
    id,
    price,
    title,
    previewImage,
    isMobile = false,
    className,
    height,
    margin,
    width
  } = props

  const dispatch = useAppDispatch()
  const cart = useAppSelector(cartSelection)

  const [date, setDate] = useState<string | undefined>(undefined)
  const [isError, setError] = useState(false)

  const isCartById = useCallback(() => 
    !!cart.find(item => item.excursionId === id), 
    [id, cart])

  useEffect(() => {
    setDate(cart.find(item => item.excursionId === id)?.date)
  }, [cart, id])

  const toggleCartHandle = useCallback(async(e: React.MouseEvent) => {
    e.stopPropagation()

    if (date) {
      if (isCartById()) {
        dispatch(removeToCart(id))
        setDate(undefined)
      } else {
       dispatch(addToCart({
          date,
          previewImage,
          excursionId: id,
          price,
          title
        }))
      }
    dispatch(saveCart())
    } else { setError(true) }
  }, [date, id, title, price, dispatch, cart])

  const cssStyles: CSSProperties = {
    height,
    maxWidth: width,
    width: width ? '100%' : undefined,
    margin
  }

  return (
        <div 
          style={cssStyles} 
          className={classNames(style.form, className)}>
            <Dropwdown
                className={isCartById() ? style.lock : undefined}
                width={isMobile ? '100%' : undefined} height={isMobile ? '33px' : undefined}
                border="1px solid #E9E9E9" borderRadius="20px"
                fontSize={12}
                padding="7px 13px"
                content={
                    <div className={style.dropdown_content}>
                        {dates.map(item =>
                            <div
                                key={item}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation() 
                                  setDate(item) 
                                }}
                                className={style.content_item}>{item}</div>)}
                    </div>}>
                    {date || <Text
                            color={isError ? 'red' : '#333'}
                            text={date === undefined ? 'Выбрать время' : date}/>}
            </Dropwdown>
            {isMobile
              ? <Button
                    onClick={toggleCartHandle}
                    fontSize={12} fontWeight={500}
                    padding="8px"
                    styleButton={enumStyleButton.PRIMARY}>
                        {isCartById()
                          ? 'Удалить'
                          : 'Добавить в заказ'}
                </Button>
              : <div className={style.btn_wrapper}>
                    <Button
                        onClick={toggleCartHandle}
                        className={style.btn}
                        width="46px" height="46px"
                        bgColor={isCartById() ? '#FFD600' : '#E9E9E9'} 
                        HoverBgColor="#E9E9E960"
                        padding="3px 0 0 0"
                        borderRadius='100px'>
                            {isCartById()
                              ? <DecrimentIcon/>
                              : <IncrementIcon/>}
                    </Button>
                </div>}
        </div>
  )
})
