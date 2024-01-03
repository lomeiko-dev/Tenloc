import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { IStore } from "./types";
import { createReducerManager } from "./utils/reducerManager";

const rootReducers: ReducersMapObject<IStore> = {

}

export const reducerManager = createReducerManager(rootReducers);

export const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch