import { type ICartScheme } from 'entities/cart'
import { type ILikesScheme } from 'entities/likes'
import { type reviewsApiReducer } from 'entities/reviews'
import { type articleApiReducer } from 'entities/article'
import { type excursionApiReducer } from 'entities/excursion'
import { type addReviewApiReducer } from 'features/form-add-review'
import { type sortExcursionApiReducer } from 'features/sort-excursion'

import { IAuthScheme } from 'entities/auth'
import { authApiReducer } from 'features/auth'
import { userApiReducer } from 'entities/user'
import { profileApiReducer } from 'entities/profile'
import { orderApiReducer } from 'features/order-form'
import { feedbackApiReducer } from 'features/feedback-form'
import { changeProfileApiReducer } from 'features/profile-form'
import { guideApiReducer } from 'features/guide-form'

export interface IStore {
   AuthReducer: IAuthScheme
   LikesReducer: ILikesScheme
   CartReducer: ICartScheme
   GuideApi: ReturnType<typeof guideApiReducer>
   FeedbackApi: ReturnType<typeof feedbackApiReducer>
   ChangeProfileApi: ReturnType<typeof changeProfileApiReducer>
   OrderApi: ReturnType<typeof orderApiReducer>
   ProfileApi: ReturnType<typeof profileApiReducer>
   UserApi: ReturnType<typeof userApiReducer>
   AuthApi: ReturnType<typeof authApiReducer>
   SortExcursionApi: ReturnType<typeof sortExcursionApiReducer>
   ExcursionApi: ReturnType<typeof excursionApiReducer>
   ReviewsApi: ReturnType<typeof reviewsApiReducer>
   AddReviewApi: ReturnType<typeof addReviewApiReducer>
   ArticleApi: ReturnType<typeof articleApiReducer>
}
