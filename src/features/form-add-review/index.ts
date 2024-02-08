import { lazy } from 'react'

export const FormAddReviewLazy = lazy(async () => await import('./ui/FormAddReview'))

export { 
    addReviewApi, 
    addReviewApiMiddleware, 
    addReviewApiReducer, 
    useAddNewReviewMutation } from './model/api/add-review-api'
