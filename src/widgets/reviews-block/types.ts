import { type IReview } from 'entities/reviews'

export interface IReviewSliderProps {
  className?: string
  margin?: string
  sliderCount: number
  onGetValue: (index: number) => void
  onClickNext: () => void
  onClickPrev: () => void
  reviews: IReview[]
  isError?: boolean
  isLoading?: boolean
  limit: number
}
