import { type IReview } from '../types'

export interface IGetPageReviewProps {
  page: number
  limit: number
  params?: string,
}

export interface IGetPageReviewData {
  reviews: IReview[]
  totalCount: number
}
