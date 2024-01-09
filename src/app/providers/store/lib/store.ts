import { configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { IStore } from "./types";
import { createReducerManager } from "./utils/reducerManager";
import { sortCityApiMiddleware, sortCityApiReducer } from "features/sort-city";

const rootReducers: ReducersMapObject<IStore> = {
    SortCityApi: sortCityApiReducer
}

export const reducerManager = createReducerManager(rootReducers);

export const store = configureStore({
    reducer: reducerManager.reduce as Reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(sortCityApiMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch