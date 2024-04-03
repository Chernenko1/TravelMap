import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

interface IUserSlice {
  email: string | null
  id: string | null
}

const initialState: IUserSlice = {
  email: null,
  id: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserSlice>) => {
      state.id = action.payload.id
      state.email = action.payload.email
    },
    removeUser: (state) => {
      state.id = null
      state.email = null
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export const user = (state: RootState) => state.user

export default userSlice.reducer
