import { useState } from 'react'
import { database } from '@components/Firebase'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { getDoc, doc } from 'firebase/firestore'
import { setFavPlaces } from '@store/actions/favPlaces'

interface IUseDataFromFirestore {
  isError: boolean | Error
  isLoading: boolean
  getData: () => void
}

export function useDataFromFirestore(): IUseDataFromFirestore {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<boolean | Error>(false)

  const userId = useAppSelector((state) => state.user.id)

  const dispatch = useAppDispatch()

  async function getData() {
    try {
      setIsLoading(true)
      const docRef = doc(database, 'Users', userId as string)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        dispatch(setFavPlaces(docSnap.data()))
        setIsLoading(false)
      }
    } catch (error) {
      setIsError(error as Error)
    }
  }

  return { isError, isLoading, getData }
}
