import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './actions/searchSlice'
import userReducer from './actions/userSlice'
// ...

export const store = configureStore({
  reducer: {
    search: searchReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
