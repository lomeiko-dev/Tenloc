import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import { IOrder } from 'entities/order'
import { IOrderPayload } from './types-payload'

export const addOrderApi = createApi({
  reducerPath: 'AddOrderApi',
  baseQuery,
  endpoints: (builder) => ({
    addNewOrder: builder.mutation<IOrder, IOrderPayload>({
      query: (body) => ({
        url: `${fetchPath.order}`,
        method: 'POST',
        body
      })
    })
  })
})

export const { useAddNewOrderMutation } = addOrderApi

export const addOrderApiReducer = addOrderApi.reducer
export const addOrderApiMiddleware = addOrderApi.middleware
