import React, { CSSProperties, memo } from 'react'
import style from './ExcursionItem.module.scss'
import classNames from 'classnames'

import { Image } from 'shared/ui/image'
import { Text } from 'shared/ui/text'

import { type IExcursion } from '../../model/types/excursion-scheme'

interface IExcursionItemProps
   extends Pick<IExcursion, 'imagePreview' | 'name'> {
   date?: string
   price?: number
   count?: number
   description?: string
   className?: string
   margin?: string
   width?: string
   onClick?: () => void
   buttonSlot?: React.ReactNode
}

export const ExcursionItem: React.FC<IExcursionItemProps> = memo((props) => {
   const {
      className,
      margin,
      width,
      description,
      count,
      imagePreview,
      price,
      name,
      date,
      onClick,
      buttonSlot,
   } = props

   const cssStyle: CSSProperties = {
      width: width ? '100%' : undefined,
      maxWidth: width,
      margin,
   }

   return (
      <div
         onClick={onClick}
         style={cssStyle}
         className={classNames(style.item, className)}>
         <div className={style.head}>
            <Image
               width="75px"
               height="75px"
               borderRadius={15}
               src={`/server${imagePreview}`}
            />
            <Text
               className={style.title}
               fontSize={14}
               fontWeight={400}
               lineHeight={26}
               text={name}
            />
         </div>
         {description && (
            <Text className={style.description} text={description} />
         )}

         {date && (
            <div className={style.slice}>
               <Text fontSize={14} fontWeight={600} text="Дата и время" />
               <Text fontSize={16} fontWeight={400} text={date} />
            </div>
         )}
         {count && (
            <div className={style.slice}>
               <Text fontSize={14} fontWeight={600} text="Кол-во" />
               <Text fontSize={16} fontWeight={400} text={`${count}`} />
            </div>
         )}
         {price && (
            <div className={style.slice}>
               <Text fontSize={14} fontWeight={600} text="Цена" />
               <Text
                  className={style.price}
                  fontSize={16}
                  fontWeight={400}
                  text={`${price} ₽`}
               />
            </div>
         )}
         {buttonSlot}
      </div>
   )
})
