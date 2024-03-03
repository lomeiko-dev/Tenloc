import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import { IOrder } from 'entities/order'
import { IFeedbackProps } from './types-payload'

export const feedbackApi = createApi({
   reducerPath: 'FeedbackApi',
   baseQuery,
   endpoints: (builder) => ({
      SendMessage: builder.mutation<IOrder, IFeedbackProps>({
         query: (body) => ({
            url: `${fetchPath.feedback}`,
            method: 'POST',
            body,
         }),
      }),
   }),
})

export const {
    useSendMessageMutation
} = feedbackApi

export const feedbackApiReducer = feedbackApi.reducer
export const feedbackApiMiddleware = feedbackApi.middleware
