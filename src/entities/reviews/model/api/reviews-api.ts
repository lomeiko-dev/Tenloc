import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import { type IGetPageReviewData, type IGetPageReviewProps } from './payload-types'
import { type IReview } from '../types'

export const reviewsApi = createApi({
  reducerPath: 'ReviewsApi',
  baseQuery,
  endpoints: (builder) => ({
    getPageReview: builder.query<IGetPageReviewData, IGetPageReviewProps>({
      query: ({ limit, page, params }) =>
        `${fetchPath.review}?_sort=score&_order=DESC&_page=${page}&_limit=${limit}${params ?? ''}`,

      transformResponse: (response: IReview[], meta) => {
        const totalCount = meta?.response?.headers.get('x-total-count')
        return { reviews: response, totalCount: Number(totalCount) }
      }
    })
  })
})

export const { useGetPageReviewQuery, useLazyGetPageReviewQuery } = reviewsApi
export const reviewsApiReducer = reviewsApi.reducer
export const reviewsApiMiddleware = reviewsApi.middleware
