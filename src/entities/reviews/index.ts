export {
        reviewsApi, 
        reviewsApiMiddleware, 
        reviewsApiReducer, 
        useGetPageReviewQuery, 
        useLazyGetPageReviewQuery} from "./model/api/reviews-api"
export type {IReview} from "./model/types"

export {ReviewDesktop} from "./ui/review-desktop/ReviewDesktop"
export {ReviewMobile} from "./ui/review-mobile/ReviewMobile"
