import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import { IUserScheme } from 'entities/user'
import { ILoginProps, IRegistrationProps } from './payload-types'

export const authgApi = createApi({
   reducerPath: 'AuthApi',
   baseQuery,
   endpoints: (builder) => ({
      registration: builder.mutation<IUserScheme, IRegistrationProps>({
         query: (body) => ({
            url: `${fetchPath.users}`,
            method: 'POST',
            body,
         }),
      }),
      login: builder.query<IUserScheme[], ILoginProps>({
         query: ({ login, password }) =>
            `${fetchPath.users}?password_like=${password}&email_like=${login}`,
      }),
      getUserByLogin: builder.query<IUserScheme[], string>({
         query: (login) => `${fetchPath.users}?email_like=${login}`,
      }),
   }),
})

export const {
   useRegistrationMutation,
   useLazyLoginQuery,
   useLoginQuery,
   useGetUserByLoginQuery,
   useLazyGetUserByLoginQuery,
} = authgApi

export const authApiReducer = authgApi.reducer
export const authApiMiddleware = authgApi.middleware
