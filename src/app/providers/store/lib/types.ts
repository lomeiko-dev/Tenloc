import { sortCityApiReducer } from "features/sort-city";

export interface IStore {
    SortCityApi: ReturnType<typeof sortCityApiReducer>,
}

export type storeKey = keyof IStore;