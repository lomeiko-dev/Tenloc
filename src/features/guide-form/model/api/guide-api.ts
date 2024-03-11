import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import { IAddGuideProps } from './payload-types'
import { IGuide } from 'entities/guide'

export const guideApi = createApi({
   reducerPath: 'GuideApi',
   baseQuery,
   endpoints: (builder) => ({
      addGuide: builder.mutation<IGuide, IAddGuideProps>({
         query: (body) => ({
            url: `${fetchPath.guide}`,
            method: 'POST',
            body,
         }),
      }),
   }),
})

export const { useAddGuideMutation } = guideApi

export const guideApiReducer = guideApi.reducer
export const guideApiMiddleware = guideApi.middleware
