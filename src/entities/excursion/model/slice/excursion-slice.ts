import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExcursionSliceScheme } from "../types/slice-scheme";
import { IExcursion } from "../types/excursion-scheme";

const initialState: IExcursionSliceScheme = {
    excursions: [],
    page: 1,
    queryString: undefined
}

export const excursionSlice = createSlice({
    name: "excursion",
    initialState: initialState,
    reducers: {
        loadData: (state, action: PayloadAction<IExcursion[]>) => {
            state.excursions = [...state.excursions, ...action.payload]
            if(action.payload.length !== 0)
                state.page += 1
        },
        setQueryString: (state, action: PayloadAction<string>) => {
            state.queryString = action.payload
            state.page = 1,
            state.excursions = []
        }
    }
})

export const {loadData, setQueryString} = excursionSlice.actions
export const excursionReducer = excursionSlice.reducer