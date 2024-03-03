import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import { IProfile } from 'entities/profile'
import {
   IChangeAvatarProps,
   IChangeEmailProps,
   IChangeNotificationProps,
   IChangePasswordProps,
   IChangePhoneProps,
} from './payload-types'

export const changeProfileApi = createApi({
   reducerPath: 'ChangeProfileApi',
   baseQuery,
   endpoints: (builder) => ({
      changeAvatar: builder.mutation<IProfile, IChangeAvatarProps>({
         query: ({ avatar, profileId }) => ({
            url: `${fetchPath.profile}/${profileId}`,
            method: 'PATCH',
            body: {
               avatar,
            },
         }),
      }),
      changeEmail: builder.mutation<IProfile, IChangeEmailProps>({
         query: ({ email, profileId }) => ({
            url: `${fetchPath.users}/${profileId}`,
            method: 'PATCH',
            body: {
               email,
            },
         }),
      }),
      changePhone: builder.mutation<IProfile, IChangePhoneProps>({
         query: ({ phone, profileId }) => ({
            url: `${fetchPath.users}/${profileId}`,
            method: 'PATCH',
            body: {
               phone,
            },
         }),
      }),
      changeNotification: builder.mutation<IProfile, IChangeNotificationProps>({
         query: ({ isNotifyEmail, isNotifySMS, profileId }) => ({
            url: `${fetchPath.profile}/${profileId}`,
            method: 'PATCH',
            body: {
               isNotifyEmail,
               isNotifySMS,
            },
         }),
      }),
      changePassword: builder.mutation<IProfile, IChangePasswordProps>({
         query: ({ password, profileId }) => ({
            url: `${fetchPath.users}/${profileId}`,
            method: 'PATCH',
            body: {
               password,
            },
         }),
      }),
   }),
})

export const {
   useChangeAvatarMutation,
   useChangeEmailMutation,
   useChangeNotificationMutation,
   useChangePasswordMutation,
   useChangePhoneMutation,
} = changeProfileApi

export const changeProfileApiReducer = changeProfileApi.reducer
export const changeProfileApiMiddleware = changeProfileApi.middleware
