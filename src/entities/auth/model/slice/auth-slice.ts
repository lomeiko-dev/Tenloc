import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAuthScheme } from '../types'
import { AUTH_DATA } from 'shared/config/local-storage-keys'

const initialState: IAuthScheme = {
   userId: undefined,
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      initAuth: (state) => {
         state.userId = localStorage.getItem(AUTH_DATA) ?? undefined
      },
      saveAuth: (state, action: PayloadAction<string>) => {
         state.userId = action.payload
         localStorage.setItem(AUTH_DATA, action.payload)
      },
      setAuth: (state, action: PayloadAction<string>) => {
         state.userId = action.payload
      },
      removeAuth: (state) => {
         state.userId = undefined
         localStorage.removeItem(AUTH_DATA)
      },
   },
})

export const authReducer = authSlice.reducer
export const { initAuth, saveAuth, removeAuth, setAuth } = authSlice.actions
