import { type articleApiReducer } from 'entities/article'
import { IAuthScheme } from 'entities/auth'
import { type ICartScheme } from 'entities/cart'
import { type excursionApiReducer } from 'entities/excursion'
import { type ILikesScheme } from 'entities/likes'
import { profileApiReducer } from 'entities/profile'
import { type reviewsApiReducer } from 'entities/reviews'
import { userApiReducer } from 'entities/user'
import { authApiReducer } from 'features/auth'
import { type addReviewApiReducer } from 'features/form-add-review'
import { type addOrderApiReducer } from 'features/order-form'
import { type sortExcursionApiReducer } from 'features/sort-excursion'

export interface IStore {
   AuthReducer: IAuthScheme
   LikesReducer: ILikesScheme
   CartReducer: ICartScheme
   ProfileApi: ReturnType<typeof profileApiReducer>
   UserApi: ReturnType<typeof userApiReducer>
   AuthApi: ReturnType<typeof authApiReducer>
   SortExcursionApi: ReturnType<typeof sortExcursionApiReducer>
   ExcursionApi: ReturnType<typeof excursionApiReducer>
   ReviewsApi: ReturnType<typeof reviewsApiReducer>
   AddReviewApi: ReturnType<typeof addReviewApiReducer>
   ArticleApi: ReturnType<typeof articleApiReducer>
   AddOrderApi: ReturnType<typeof addOrderApiReducer>
}
