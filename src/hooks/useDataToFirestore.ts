import { useState } from 'react'
import { database } from '@components/Firebase'
import { useAppSelector } from '@store/hooks'
import { updateDoc, doc, arrayUnion, arrayRemove } from 'firebase/firestore'

interface IUseDataToFirestore {
  isError: boolean | Error
  isLoading: boolean
  addData: (placeId: string) => void
  removeData: (placeId: string) => void
}

export function useDataToFirestore(): IUseDataToFirestore {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<boolean | Error>(false)

  const userId = useAppSelector((state) => state.user.id)
  const docRef = doc(database, 'Users', userId as string)

  async function addData(placeId: string) {
    try {
      setIsLoading(true)
      await updateDoc(docRef, {
        places: arrayUnion(placeId),
      })
      setIsLoading(false)
    } catch (error) {
      setIsError(error as Error)
    }
  }

  async function removeData(placeId: string) {
    try {
      setIsLoading(true)
      await updateDoc(docRef, {
        places: arrayRemove(placeId),
      })
      setIsLoading(false)
    } catch (error) {
      setIsError(error as Error)
    }
  }

  return { isError, isLoading, addData, removeData }
}
