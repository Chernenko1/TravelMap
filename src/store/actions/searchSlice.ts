import { map } from '@constants/map'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

type Coords = { lat: number; lng: number }
interface ISearch {
  searchPlaces: string[]
  places: Feature[]
  radius: string
  userCoords: Coords
  coordsToMove: Coords
  routeCoords: undefined | [Coords, Coords]
}

const initialState: ISearch = {
  searchPlaces: ['accommodation'],
  places: [],
  radius: '1000',
  userCoords: map.INITILA_COORDINATES,
  coordsToMove: map.INITILA_COORDINATES,
  routeCoords: undefined,
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
    setRouteCoords: (state, actions: PayloadAction<{ from: Coords; to: Coords }>) => {
      state.routeCoords = [actions.payload.from, actions.payload.to]
    },
    clearRouteCoordinates: (state) => {
      state.routeCoords = undefined
    },
  },
})

export const {
  setSearchPlace,
  setRadius,
  setMoveCoords,
  setUserCoords,
  setFoundPlaces,
  clearRouteCoordinates,
  setRouteCoords,
} = searchSlice.actions

export const search = (state: RootState) => state.search

export default searchSlice.reducer
