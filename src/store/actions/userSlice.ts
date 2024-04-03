import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

interface IUserSlice {
  isAuth: boolean
  email: string
  name: string
  id: string
  token: string
}

const initialState: IUserSlice = {
  isAuth: false,
  email: '',
  name: '',
  token: '',
  id: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ id: string; email: string; token: string; name: string }>) => {
      state.isAuth = true
      state.id = action.payload.id
      state.email = action.payload.email
      state.token = action.payload.token
      state.name = action.payload.name
    },
    removeUser: (state) => {
      state.isAuth = false
      state.id = ''
      state.email = ''
      state.token = ''
      state.name = ''
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export const user = (state: RootState) => state.user

export default userSlice.reducer
