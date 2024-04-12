import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import favPalcesReducer from './actions/favPlaces'
import searchReducer from './actions/searchSlice'
import userReducer from './actions/userSlice'
import settingsReduser from './actions/searchSlice'

const userConfig = {
  key: 'user',
  storage,
}

const favouritePlacesConfing = {
  key: 'favourite',
  storage,
}

const settingConfig = {
  key: 'settings',
  storage,
  blacklist: ['interestCoords'],
}

const userPersistReducer = persistReducer(userConfig, userReducer)
const favouritePlacesPersistReducer = persistReducer(favouritePlacesConfing, favPalcesReducer)
const settingsPersistReducer = persistReducer(settingConfig, settingsReduser)

export const store = configureStore({
  reducer: {
    search: settingsPersistReducer,
    favPlaces: favouritePlacesPersistReducer,
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
