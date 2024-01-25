import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from "shared/config/api";
import { ICity, IExcursion } from "entities/excursion";
import { IGetExcursionByNameProps } from './payload-types';

export const sortExcursionApi = createApi({
    reducerPath: "SortExcursionApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getCityByName: builder.query<ICity[], string>({
            query: (text) => 
                `${fetchPath.city}?city_like=${text}`,
        }),
        getCityByBookingCount: builder.query<ICity[], number>({
            query: (limit) => 
                `${fetchPath.city}?_sort=allBookingCount&_order=DESC&_limit=${limit}`,
        }),
        getExcursionByName: builder.query<IExcursion[], IGetExcursionByNameProps>({
            query: ({limit, page, text}) => 
                `${fetchPath.excursion}?name_like=${text}&_page=${page}&_limit=${limit}`,
        })
    })
})

export const { 
    useGetCityByNameQuery, 
    useLazyGetCityByNameQuery, 
    useGetCityByBookingCountQuery, 
    useLazyGetCityByBookingCountQuery,
    useGetExcursionByNameQuery,
    useLazyGetExcursionByNameQuery } = sortExcursionApi
    
export const sortExcursionApiReducer = sortExcursionApi.reducer
export const sortExcursionApiMiddleware = sortExcursionApi.middleware 