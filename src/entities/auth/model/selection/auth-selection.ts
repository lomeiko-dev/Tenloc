import { IStore } from 'app/providers/store'

export const userIdSelection = (state: IStore) => state.AuthReducer.userId
