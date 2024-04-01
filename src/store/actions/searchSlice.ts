import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@store/store'
import { getPlaces } from '@utils/getPlaces'

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
  reducers: {},
})

export const {} = searchSlice.actions

export const selectCount = (state: RootState) => state.search

export default searchSlice.reducer
