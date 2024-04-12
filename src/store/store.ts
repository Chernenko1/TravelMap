import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import favPalcesReducer from './actions/favPlaces'
import searchReducer from './actions/searchSlice'
import userReducer from './actions/userSlice'

const userConfig = {
  key: 'user',
  storage,
}

const userPersistReducer = persistReducer(userConfig, userReducer)

export const store = configureStore({
  reducer: {
    search: searchReducer,
    favPlaces: favPalcesReducer,
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
