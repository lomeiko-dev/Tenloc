import { type IStore } from 'app/providers/store'

export const cartSelection = (state: IStore) => state.CartReducer.cart || []
