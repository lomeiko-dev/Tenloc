import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from "shared/config/api";
import { IExcursion } from '../types/excursion-scheme';
import { IGetPageExcursionData, IGetPageExcursionProps } from './payload-types';

export const excursionApi = createApi({
    reducerPath: "ExcursionApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getPageExcursions: builder.query<IGetPageExcursionData, IGetPageExcursionProps>({
            query: ({page, limit, params}) =>
                `${fetchPath.excursion}?_page=${page}&_limit=${limit}${params}`,

            transformResponse: (response: IExcursion[], meta) => {
                const totalCount = meta?.response?.headers.get('x-total-count')
                return { excursions: response, totalCount: Number(totalCount)}
            }
        }),
    })
})

export const { useGetPageExcursionsQuery, useLazyGetPageExcursionsQuery } = excursionApi
    
export const excursionApiReducer = excursionApi.reducer
export const excursionApiMiddleware = excursionApi.middleware