import { type IStore } from 'app/providers/store'

export const excursionIdsSelection = (state: IStore) => state.LikesReducer.excursionIds || []
