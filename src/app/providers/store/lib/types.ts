import { IExcursionSliceScheme, excursionApiReducer } from "entities/excursion";
import { sortExcursionApiReducer } from "features/sort-excursion";

export interface IStore {
    SortExcursionApi: ReturnType<typeof sortExcursionApiReducer>,
    ExcursionApi: ReturnType<typeof excursionApiReducer>
    ExcursionReducer: IExcursionSliceScheme

}

export type storeKey = keyof IStore;