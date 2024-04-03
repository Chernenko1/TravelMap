import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import searchReducer from './actions/searchSlice'
import userReducer from './actions/userSlice'
import persistStore from 'redux-persist/es/persistStore'

const userConfig = {
  key: 'user',
  storage,
}

const userPersistReducer = persistReducer(userConfig, userReducer)

export const store = configureStore({
  reducer: {
    search: searchReducer,
    user: userPersistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
