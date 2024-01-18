import { configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { IStore } from "./types";
import { createReducerManager } from "./utils/reducerManager";
import { sortExcursionApiMiddleware, sortExcursionApiReducer } from "features/sort-excursion";
import { excursionApiMiddleware, excursionApiReducer, excursionReducer } from "entities/excursion";

const rootReducers: ReducersMapObject<IStore> = {
    SortExcursionApi: sortExcursionApiReducer,
    ExcursionApi: excursionApiReducer,
    ExcursionReducer: excursionReducer
}

export const reducerManager = createReducerManager(rootReducers);

export const store = configureStore({
    reducer: reducerManager.reduce as Reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(sortExcursionApiMiddleware,
                    excursionApiMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch