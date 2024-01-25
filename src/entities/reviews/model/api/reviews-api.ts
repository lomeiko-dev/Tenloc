import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchPath } from "shared/config/api";
import { IGetPageReviewData, IGetPageReviewProps } from "./payload-types";
import { IReview } from "../types";

export const reviewsApi = createApi({
    reducerPath: "ReviewsApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getPageReview: builder.query<IGetPageReviewData, IGetPageReviewProps>({
            query: ({limit, page}) =>
                `${fetchPath.review}?_sort=score&_order=DESC&_page=${page}&_limit=${limit}`,

            transformResponse: (response: IReview[], meta) => {
                const totalCount = meta?.response?.headers.get('x-total-count')
                return { reviews: response, totalCount: Number(totalCount)}
            }
        }),
    })
})

export const { useGetPageReviewQuery, useLazyGetPageReviewQuery } = reviewsApi
export const reviewsApiReducer = reviewsApi.reducer;
export const reviewsApiMiddleware = reviewsApi.middleware;