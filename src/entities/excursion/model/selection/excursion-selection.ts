import { IStore } from "app/providers/store";

export const excursionSelection = (state: IStore) => state.ExcursionReducer.excursions || []
export const pageSelection = (state: IStore) => state.ExcursionReducer.page || 1
export const queryStringSelection = (state: IStore) => state.ExcursionReducer.queryString || undefined