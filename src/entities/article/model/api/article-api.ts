import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import {
   type IGetPageArticleData,
   type IGetPageArticleProps,
} from './payload-types'
import { type IArticle } from '../types'

export const articleApi = createApi({
   reducerPath: 'ArticleApi',
   baseQuery,
   endpoints: (builder) => ({
      getPageArticles: builder.query<IGetPageArticleData, IGetPageArticleProps>(
         {
            query: ({ page, limit, params }) =>
               `${fetchPath.article}?_page=${page}&_limit=${limit}${params}`,

            transformResponse: (response: IArticle[], meta) => {
               const totalCount = meta?.response?.headers.get('x-total-count')
               return { articles: response, totalCount: Number(totalCount) }
            },
         }
      ),
      getArticleById: builder.query<IArticle, string>({
         query: (id) => `${fetchPath.article}/${id}`,
      }),
   }),
})

export const {
   useGetPageArticlesQuery,
   useLazyGetPageArticlesQuery,
   useGetArticleByIdQuery,
   useLazyGetArticleByIdQuery,
} = articleApi

export const articleApiReducer = articleApi.reducer
export const articleApiMiddleware = articleApi.middleware
