import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from "shared/config/api";
import { ICity } from "entities/excursion";

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
        })
    })
})

export const { 
    useGetCityByNameQuery, 
    useLazyGetCityByNameQuery, 
    useGetCityByBookingCountQuery, 
    useLazyGetCityByBookingCountQuery } = sortExcursionApi
    
export const sortExcursionApiReducer = sortExcursionApi.reducer
export const sortExcursionApiMiddleware = sortExcursionApi.middleware 