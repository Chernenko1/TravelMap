import { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useAppDispatch } from '@store/hooks'
import { setUser } from '@store/actions/userSlice'
import { firebaseErrors } from '@constants/firebase'
import { database } from '@components/Firebase'

interface IUseDataFromFirestore {
  isError: boolean | string
  isLoading: boolean
  userRegistration: (values: { email: string; password: string }) => void
  userLogin: (values: { email: string; password: string }) => void
}

type ErrorCodes = 'auth/too-many-requests' | 'auth/invalid-credential'

type Values = { email: string; password: string }

export function useUserAuthentication(): IUseDataFromFirestore {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<boolean | string>(false)

  const auth = getAuth()
  const dispatch = useAppDispatch()

  async function createEmptyArr(id: string) {
    await setDoc(doc(database, 'Users', id), { places: [] })
  }

  async function userLogin(values: Values) {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(({ user }) => {
        dispatch(setUser({ id: user.uid, email: user.email }))
        setIsLoading(false)
      })
      .catch(({ code }: { code: ErrorCodes }) => {
        setIsLoading(false)
        setIsError(firebaseErrors[code])
      })
  }

  async function userRegistration(values: Values) {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(({ user }) => {
        dispatch(setUser({ id: user.uid, email: user.email }))
        createEmptyArr(user.uid)
        setIsLoading(false)
      })
      .catch(({ code }: { code: ErrorCodes }) => {
        setIsLoading(false)
        console.log(code)
        setIsError(firebaseErrors[code])
      })
  }

  return { isError, isLoading, userRegistration, userLogin }
}
