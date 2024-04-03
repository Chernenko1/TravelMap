import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

interface ISearch {
  searchPlaces: string[]
  radius: string
  userCoords: { lat: number; lng: number }
}

const initialState: ISearch = {
  searchPlaces: ['accommodation'],
  radius: '5000',
  userCoords: { lat: 53.677839, lng: 23.829529 },
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchPlace: (state, actions: PayloadAction<string[]>) => {
      state.searchPlaces = actions.payload
    },
    setRadius: (state, actions) => {
      state.radius = actions.payload
    },
  },
})

export const { setSearchPlace, setRadius } = searchSlice.actions

export const search = (state: RootState) => state.search

export default searchSlice.reducer
