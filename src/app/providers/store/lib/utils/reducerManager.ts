import { combineReducers, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import {IStore, storeKey} from "../types"

export function createReducerManager (initialReducers: ReducersMapObject<IStore>) {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: storeKey[] = []

  return {
    getReducerMap: () => reducers,
    reduce (state: IStore, action: never) {
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (const key of keysToRemove) {
          delete state[key]
        }

        keysToRemove = []
      }

      return combinedReducer(state, action)
    },
    add (key: storeKey, reducer: Reducer) {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
    },
    remove (key: storeKey) {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    }
  }
}
