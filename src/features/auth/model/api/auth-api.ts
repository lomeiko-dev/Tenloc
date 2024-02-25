import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import { IUserScheme } from 'entities/user'
import {
   ICreateProfile,
   ILoginProps,
   IRegistrationProps,
} from './payload-types'
import { IProfile } from 'entities/profile'

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
      createProfile: builder.query<IProfile, ICreateProfile>({
         query: (body) => ({
            url: `${fetchPath.profile}`,
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
   useLazyCreateProfileQuery,
} = authgApi

export const authApiReducer = authgApi.reducer
export const authApiMiddleware = authgApi.middleware
