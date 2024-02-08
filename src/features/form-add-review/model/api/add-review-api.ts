import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import { type IReview } from 'entities/reviews'
import { type IFormAddReview } from '../types'

export const addReviewApi = createApi({
  reducerPath: 'AddReviewApi',
  baseQuery,
  endpoints: (builder) => ({
    addNewReview: builder.mutation<IReview, IFormAddReview>({
      query: (body) => ({
        url: `${fetchPath.review}`,
        method: 'POST',
        body
      })
    })
  })
})

export const { useAddNewReviewMutation } = addReviewApi

export const addReviewApiReducer = addReviewApi.reducer
export const addReviewApiMiddleware = addReviewApi.middleware
