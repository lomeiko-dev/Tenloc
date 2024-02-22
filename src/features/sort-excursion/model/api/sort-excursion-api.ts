import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import { type ICity, type IExcursion } from 'entities/excursion'
import { type IGetExcursionByNameProps } from './payload-types'

export const sortExcursionApi = createApi({
  reducerPath: 'SortExcursionApi',
  baseQuery,
  endpoints: (builder) => ({
    getCityByName: builder.query<ICity[], string>({
      query: (text) =>
                `${fetchPath.city}?city_like=${text}`
    }),
    getExcursionByName: builder.query<IExcursion[], IGetExcursionByNameProps>({
      query: ({ limit, page, text }) =>
                `${fetchPath.excursion}?name_like=${text}&_page=${page}&_limit=${limit}`
    }),
    getExcursionById: builder.query<IExcursion[], string>({
      query: (id) =>
                `${fetchPath.excursion}?id=${id}`
    })
  })
})

export const {
  useGetCityByNameQuery,
  useLazyGetCityByNameQuery,
  useGetExcursionByNameQuery,
  useLazyGetExcursionByNameQuery,
  useGetExcursionByIdQuery,
  useLazyGetExcursionByIdQuery
} = sortExcursionApi

export const sortExcursionApiReducer = sortExcursionApi.reducer
export const sortExcursionApiMiddleware = sortExcursionApi.middleware
