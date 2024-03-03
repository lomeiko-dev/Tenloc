import { ExcursionItem } from 'entities/excursion'
import style from './OrderPage.module.scss'
import { SortOrder, enumSortOrder } from 'features/sort-order'
import { useAuth } from 'shared/lib/hooks/useAuth'
import { Button, enumStyleButton } from 'shared/ui/button'
import { useCallback, useEffect, useState } from 'react'
import {
   useGetOrdersByUserIdQuery,
   useRemoveOrderByIdMutation,
} from 'features/order-form'
import { IOrder } from 'entities/order'

const OrderPage = () => {
   const user = useAuth()
   const { data = [] } = useGetOrdersByUserIdQuery(user.data?.user?.id || '0')
   const [sortingOrder, setSortingOrder] = useState<IOrder[]>([])
   const [methodSort, setMethodSort] = useState<enumSortOrder>(
      enumSortOrder.ALL
   )
   const [removeOrder] = useRemoveOrderByIdMutation()

   useEffect(() => {
      if (data.length > 0) setSortingOrder(data)
   }, [data])

   const removeOrderHandle = useCallback(async (id: string) => {
      await removeOrder(id)
   }, [])

   return (
      <div className={style.page}>
         <SortOrder
            getMethodSort={setMethodSort}
            orders={data}
            margin="54px 0 49px 0"
            width="300px"
            getOrder={(orders) => setSortingOrder(orders)}
         />
         {sortingOrder.map((order, index) => (
            <div
               className={
                  index % 2 === 0 ? style.excursion_wrapper : undefined
               }>
               <ExcursionItem
                  count={
                     order.valueAdult +
                     order.valueChildren +
                     order.valuePensioner +
                     order.valueSmallChildren +
                     order.valueYouth
                  }
                  description={order.nameExcursion}
                  name={order.city}
                  price={order.price}
                  date={order.date}
                  imagePreview={order.imagePreview}
                  buttonSlot={
                     methodSort !== enumSortOrder.COMPLETED ? (
                        <Button
                           onClick={() => removeOrderHandle(order.id)}
                           styleButton={enumStyleButton.PRIMARY}>
                           Отменить
                        </Button>
                     ) : (
                        <span>Завершен</span>
                     )
                  }
               />
            </div>
         ))}
      </div>
   )
}

export default OrderPage
