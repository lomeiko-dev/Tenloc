import { type articleApiReducer } from 'entities/article'
import { type ICartScheme } from 'entities/cart'
import { type excursionApiReducer } from 'entities/excursion'
import { type ILikesScheme } from 'entities/likes'
import { type reviewsApiReducer } from 'entities/reviews'
import { type addReviewApiReducer } from 'features/form-add-review'
import { type sortExcursionApiReducer } from 'features/sort-excursion'

export interface IStore {
  LikesReducer: ILikesScheme
  CartReducer: ICartScheme
  SortExcursionApi: ReturnType<typeof sortExcursionApiReducer>
  ExcursionApi: ReturnType<typeof excursionApiReducer>
  ReviewsApi: ReturnType<typeof reviewsApiReducer>
  AddReviewApi: ReturnType<typeof addReviewApiReducer>
  ArticleApi: ReturnType<typeof articleApiReducer>
}
