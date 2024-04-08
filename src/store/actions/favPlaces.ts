import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

interface IFavPlaces {
  id: string[]
}

const initialState: IFavPlaces = {
  id: [],
}

export const favPlaces = createSlice({
  name: 'favPlaces',
  initialState,
  reducers: {
    setFavPlaces: (state, actions) => {
      state.id = [...state.id, ...actions.payload]
      // console.log(new Set(state.id))
    },
    addFavPlace: (state, actions: PayloadAction<string>) => {
      state.id.push(actions.payload)
    },
    deleteFavPlace: (state, actions: PayloadAction<string>) => {
      state.id = state.id.filter((item) => item !== actions.payload)
    },
  },
})

export const { addFavPlace, deleteFavPlace, setFavPlaces } = favPlaces.actions

export const fav = (state: RootState) => state.favPlaces

export default favPlaces.reducer
