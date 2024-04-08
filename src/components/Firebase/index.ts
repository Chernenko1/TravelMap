import { initializeApp } from 'firebase/app'
import { env } from '@constants/index'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_AUTH_DOMAIN,
  projectId: env.VITE_PROJECT_ID,
  storageBucket: env.VITE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_MESSAGE_SENDER_ID,
  appId: env.VITE_APP_ID,
  measurementId: env.VITE_MEASUREMENT_ID,
}

const FireBaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(FireBaseApp)

export const database = getFirestore(FireBaseApp)

export default FireBaseApp
