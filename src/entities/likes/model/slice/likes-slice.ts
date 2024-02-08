import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ILikesScheme } from '../types'
import { LIKES_KEY } from 'shared/config/local-storage-keys'

const initialState: ILikesScheme = {
  excursionIds: []
}

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    toggleLikeExcursion: (state, action: PayloadAction<string>) => {
      const like = state.excursionIds.find(item => item === action.payload)

      if (like) { state.excursionIds = state.excursionIds.filter(item => item !== like) } else { state.excursionIds.push(action.payload) }
    },
    saveLikes: (state) => {
      localStorage.setItem(LIKES_KEY, JSON.stringify(state.excursionIds))
    },
    loadLikes: (state) => {
      const storedData = localStorage.getItem(LIKES_KEY)
      const data: string[] = storedData ? JSON.parse(storedData) : []
      state.excursionIds = [...data]
    }
  }
})

export const likesReducer = likesSlice.reducer
export const { toggleLikeExcursion, loadLikes, saveLikes } = likesSlice.actions
