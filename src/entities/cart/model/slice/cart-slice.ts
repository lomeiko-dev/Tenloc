import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ICart, type ICartScheme } from '../types'
import { CART_KEY } from 'shared/config/local-storage-keys'

const initialState: ICartScheme = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      state.cart.push(action.payload)
    },
    removeToCart: (state, action: PayloadAction<string>) => {
      state.cart =
                state.cart.filter(item => item.excursionId !== action.payload)
    },
    saveCart: (state) => {
      localStorage.setItem(CART_KEY, JSON.stringify(state.cart))
    },
    loadCart: (state) => {
      const storedData = localStorage.getItem(CART_KEY)
      const data: ICart[] = storedData ? JSON.parse(storedData) : []
      state.cart = [...data]
    }
  }
})

export const cartReducer = cartSlice.reducer
export const { addToCart, removeToCart, loadCart, saveCart } = cartSlice.actions
