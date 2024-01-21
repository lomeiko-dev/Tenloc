import { ICartScheme } from "entities/cart";
import { IExcursionSliceScheme, excursionApiReducer } from "entities/excursion";
import { ILikesScheme } from "entities/likes";
import { sortExcursionApiReducer } from "features/sort-excursion";

export interface IStore {
    LikesReducer: ILikesScheme,
    CartReducer: ICartScheme
    ExcursionReducer: IExcursionSliceScheme,
    SortExcursionApi: ReturnType<typeof sortExcursionApiReducer>,
    ExcursionApi: ReturnType<typeof excursionApiReducer>
}