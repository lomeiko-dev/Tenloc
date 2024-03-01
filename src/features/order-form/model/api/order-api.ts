import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import { IOrder } from 'entities/order'
import { IOrderPayload } from './types-payload'

export const OrderApi = createApi({
   reducerPath: 'OrderApi',
   baseQuery,
   tagTypes: ['orders'],
   endpoints: (builder) => ({
      addNewOrder: builder.mutation<IOrder, IOrderPayload>({
         query: (body) => ({
            url: `${fetchPath.order}`,
            method: 'POST',
            body,
         }),
      }),
      removeOrderById: builder.mutation<IOrder, string>({
         query: (id) => ({
            url: `${fetchPath.order}/${id}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['orders'],
      }),
      getOrdersByUserId: builder.query<IOrder[], string>({
         query: (id) => `${fetchPath.order}?userId=${id}`,
         providesTags: ['orders'],
      }),
   }),
})

export const {
   useAddNewOrderMutation,
   useRemoveOrderByIdMutation,
   useGetOrdersByUserIdQuery,
   useLazyGetOrdersByUserIdQuery,
} = OrderApi

export const orderApiReducer = OrderApi.reducer
export const orderApiMiddleware = OrderApi.middleware
