import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type IStore } from './types'
import {
   sortExcursionApiMiddleware,
   sortExcursionApiReducer,
} from 'features/sort-excursion'
import { excursionApiMiddleware, excursionApiReducer } from 'entities/excursion'
import { likesReducer } from 'entities/likes'
import { cartReducer } from 'entities/cart'
import { reviewsApiMiddleware, reviewsApiReducer } from 'entities/reviews'
import {
   addReviewApiMiddleware,
   addReviewApiReducer,
} from 'features/form-add-review'
import { articleApiMiddleware, articleApiReducer } from 'entities/article'
import { authReducer } from 'entities/auth'
import { authApiMiddleware, authApiReducer } from 'features/auth'
import { userApiMiddleware, userApiReducer } from 'entities/user'
import { profileApiMiddleware, profileApiReducer } from 'entities/profile'
import { orderApiMiddleware, orderApiReducer } from 'features/order-form'
import {
   changeProfileApiMiddleware,
   changeProfileApiReducer,
} from 'features/profile-form'
import {
   feedbackApiMiddleware,
   feedbackApiReducer,
} from 'features/feedback-form'
import { guideApiMiddleware, guideApiReducer } from 'features/guide-form'

const rootReducers: ReducersMapObject<IStore> = {
   FeedbackApi: feedbackApiReducer,
   ChangeProfileApi: changeProfileApiReducer,
   ProfileApi: profileApiReducer,
   GuideApi: guideApiReducer,
   OrderApi: orderApiReducer,
   UserApi: userApiReducer,
   AuthApi: authApiReducer,
   AuthReducer: authReducer,
   LikesReducer: likesReducer,
   CartReducer: cartReducer,
   ExcursionApi: excursionApiReducer,
   SortExcursionApi: sortExcursionApiReducer,
   ReviewsApi: reviewsApiReducer,
   AddReviewApi: addReviewApiReducer,
   ArticleApi: articleApiReducer,
}

export const store = configureStore({
   reducer: rootReducers,
   devTools: true,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
         changeProfileApiMiddleware,
         feedbackApiMiddleware,
         orderApiMiddleware,
         guideApiMiddleware,
         profileApiMiddleware,
         userApiMiddleware,
         authApiMiddleware,
         sortExcursionApiMiddleware,
         excursionApiMiddleware,
         reviewsApiMiddleware,
         addReviewApiMiddleware,
         articleApiMiddleware
      ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
