import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

interface IFavPlaces {
  places: Place[]
}

const initialState: IFavPlaces = {
  //@ts-ignore
  places: [],
}

export const favPlaces = createSlice({
  name: 'favPlaces',
  initialState,
  reducers: {
    setFavPlaces: (state, actions) => {
      state.places = actions.payload
    },
    addFavPlace: (state, actions) => {
      state.places.push(actions.payload)
    },
    deleteFavPlace: (state, actions: PayloadAction<string>) => {
      let places = state.places.filter((place) => place.placeId !== actions.payload)
      //@ts-ignore
      state.places = places
    },
  },
})

export const { addFavPlace, deleteFavPlace, setFavPlaces } = favPlaces.actions

export const fav = (state: RootState) => state.favPlaces

export default favPlaces.reducer
