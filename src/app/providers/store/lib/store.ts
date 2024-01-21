import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { IStore } from "./types";
import { sortExcursionApiMiddleware, sortExcursionApiReducer } from "features/sort-excursion";
import { excursionApiMiddleware, excursionApiReducer, excursionReducer,  } from "entities/excursion";
import { likesReducer } from "entities/likes";
import { cartReducer } from "entities/cart";

const rootReducers: ReducersMapObject<IStore> = {
    LikesReducer: likesReducer,
    CartReducer: cartReducer,
    ExcursionApi: excursionApiReducer,
    SortExcursionApi: sortExcursionApiReducer,
    ExcursionReducer: excursionReducer
}

export const store = configureStore({
    reducer: rootReducers,
    devTools: true,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(sortExcursionApiMiddleware,
                    excursionApiMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch