import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from "shared/config/api";
import { IReview } from 'entities/reviews';
import { IFormAddReview } from '../types';

export const addReviewApi = createApi({
    reducerPath: "AddReviewApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        addNewReview: builder.mutation<IReview, IFormAddReview>({
            query: (body) => ({
                url: `${fetchPath.review}`,
                method: 'POST',
                body
            })
        }),
    })
})

export const { useAddNewReviewMutation } = addReviewApi
    
export const addReviewApiReducer = addReviewApi.reducer
export const addReviewApiMiddleware = addReviewApi.middleware