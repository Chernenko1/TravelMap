import { map } from '@constants/map'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

interface ISearch {
  searchPlaces: string[]
  places: Feature[]
  radius: string
  userCoords: { lat: number; lng: number }
  coordsToMove: { lat: number; lng: number }
}

const initialState: ISearch = {
  searchPlaces: ['accommodation'],
  places: [],
  radius: '1000',
  userCoords: map.INITILA_COORDINATES,
  coordsToMove: map.INITILA_COORDINATES,
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
    setMoveCoords: (state, actions) => {
      state.coordsToMove = actions.payload
    },
    setUserCoords: (state, actions) => {
      state.userCoords = actions.payload
    },
    setFoundPlaces: (state, actions) => {
      state.places = actions.payload
    },
  },
})

export const { setSearchPlace, setRadius, setMoveCoords, setUserCoords, setFoundPlaces } = searchSlice.actions

export const search = (state: RootState) => state.search

export default searchSlice.reducer
