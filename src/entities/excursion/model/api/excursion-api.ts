import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import { type IExcursion } from '../types/excursion-scheme'
import { type IGetPageExcursionData, type IGetPageExcursionProps } from './payload-types'
import { type ICity } from '../types/city-scheme'

export const excursionApi = createApi({
  reducerPath: 'ExcursionApi',
  baseQuery,
  endpoints: (builder) => ({
    getPageExcursions: builder.query<IGetPageExcursionData, IGetPageExcursionProps>({
      query: ({ page, limit, params }) =>
                `${fetchPath.excursion}?_page=${page}&_limit=${limit}${params}`,

      transformResponse: (response: IExcursion[], meta) => {
        const totalCount = meta?.response?.headers.get('x-total-count')
        return { excursions: response, totalCount: Number(totalCount) }
      }
    }),
    getCity: builder.query<ICity[], number>({
      query: (limit) =>
                `${fetchPath.city}?_sort=allBookingCount&_order=DESC&_limit=${limit}`
    })
  })
})

export const {
  useGetPageExcursionsQuery,
  useLazyGetPageExcursionsQuery,
  useGetCityQuery,
  useLazyGetCityQuery
} = excursionApi

export const excursionApiReducer = excursionApi.reducer
export const excursionApiMiddleware = excursionApi.middleware
