import { CSSProperties, memo, useCallback, useState } from 'react'
import style from './SortOrder.module.scss'
import classNames from 'classnames'

import { Button, enumStyleButton } from 'shared/ui/button'
import { IOrder } from 'entities/order'
import { formatDateToDate } from 'shared/lib/handlers/formatDate'

export enum enumSortOrder {
   ALL = 'all',
   ACTIVE = 'active',
   COMPLETED = 'completed',
}

interface ISortOrderProps {
   getOrder: (orders: IOrder[]) => void
   getMethodSort?: (method: enumSortOrder) => void
   orders: IOrder[]
   className?: string
   margin?: string
   width?: string
}

export const SortOrder: React.FC<ISortOrderProps> = memo((props) => {
   const { className, margin, getOrder, width, orders, getMethodSort } = props

   const [sortOrder, setSortOrder] = useState(enumSortOrder.ALL)

   const onClickHandler = useCallback(
      (type: enumSortOrder) => {
         setSortOrder(type)
         getMethodSort && getMethodSort(type)

         if (type === enumSortOrder.ACTIVE) {
            getOrder(
               orders.filter(
                  (order) => formatDateToDate(order.date) > new Date()
               )
            )
         } else if (type === enumSortOrder.COMPLETED) {
            getOrder(
               orders.filter(
                  (order) => formatDateToDate(order.date) < new Date()
               )
            )
         } else {
            getOrder(orders)
         }
      },
      [orders]
   )

   const cssStyle: CSSProperties = {
      margin,
      width: '100%',
      maxWidth: width,
   }

   return (
      <div style={cssStyle} className={classNames(style.form, className)}>
         <Button
            onClick={() => onClickHandler(enumSortOrder.ALL)}
            styleButton={
               sortOrder === enumSortOrder.ALL
                  ? enumStyleButton.PRIMARY
                  : undefined
            }>
            Все
         </Button>
         <Button
            onClick={() => onClickHandler(enumSortOrder.ACTIVE)}
            styleButton={
               sortOrder === enumSortOrder.ACTIVE
                  ? enumStyleButton.PRIMARY
                  : undefined
            }>
            Активные
         </Button>
         <Button
            onClick={() => onClickHandler(enumSortOrder.COMPLETED)}
            styleButton={
               sortOrder === enumSortOrder.COMPLETED
                  ? enumStyleButton.PRIMARY
                  : undefined
            }>
            Завершенные
         </Button>
      </div>
   )
})
