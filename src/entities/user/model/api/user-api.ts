import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import { IUserScheme } from 'entities/user'

export const userApi = createApi({
   reducerPath: 'UserApi',
   baseQuery,
   endpoints: (builder) => ({
      getUserById: builder.query<IUserScheme, string>({
         query: (id) => `${fetchPath.users}/${id}`,
      }),
   }),
})

export const { useGetUserByIdQuery, useLazyGetUserByIdQuery } = userApi

export const userApiReducer = userApi.reducer
export const userApiMiddleware = userApi.middleware
