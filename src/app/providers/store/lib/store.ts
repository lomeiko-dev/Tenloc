import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { IStore } from "./types";
import { sortExcursionApiMiddleware, sortExcursionApiReducer } from "features/sort-excursion";
import { excursionApiMiddleware, excursionApiReducer,  } from "entities/excursion";
import { likesReducer } from "entities/likes";
import { cartReducer } from "entities/cart";
import { reviewsApiMiddleware, reviewsApiReducer } from "entities/reviews";
import { addReviewApiMiddleware, addReviewApiReducer } from "features/form-add-review";

const rootReducers: ReducersMapObject<IStore> = {
    LikesReducer: likesReducer,
    CartReducer: cartReducer,
    ExcursionApi: excursionApiReducer,
    SortExcursionApi: sortExcursionApiReducer,
    ReviewsApi: reviewsApiReducer,
    AddReviewApi: addReviewApiReducer
}

export const store = configureStore({
    reducer: rootReducers,
    devTools: true,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(sortExcursionApiMiddleware,
                    excursionApiMiddleware,
                    reviewsApiMiddleware,
                    addReviewApiMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch