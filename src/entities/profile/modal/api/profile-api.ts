import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import { IProfile } from '../types'

export const profileApi = createApi({
   reducerPath: 'ProfileApi',
   baseQuery,
   endpoints: (builder) => ({
      getProfileByUserId: builder.query<IProfile, string>({
         query: (id) => `${fetchPath.profile}/${id}`,
      }),
   }),
})

export const { useGetProfileByUserIdQuery, useLazyGetProfileByUserIdQuery } =
   profileApi

export const profileApiReducer = profileApi.reducer
export const profileApiMiddleware = profileApi.middleware
