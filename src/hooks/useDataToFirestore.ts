import { useState } from 'react'
import { database } from '@components/Firebase'
import { useAppSelector } from '@store/hooks'
import { updateDoc, arrayRemove, arrayUnion, doc, DocumentReference, DocumentData } from 'firebase/firestore'

interface IUseDataToFirestore {
  isError: boolean | Error
  isLoading: boolean
  addData: (placeId: Place) => void
  removeData: (placeId: Place) => void
}

export function useDataToFirestore(isAuth: boolean): IUseDataToFirestore {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<boolean | Error>(false)

  const userId = useAppSelector((state) => state.user.id)
  let docRef: DocumentReference<DocumentData, DocumentData>

  if (isAuth) {
    docRef = doc(database, 'Users', userId as string)
  }

  async function addData(place: {}) {
    try {
      setIsLoading(true)
      await updateDoc(docRef, {
        places: arrayUnion(place),
      })
      setIsLoading(false)
    } catch (error) {
      setIsError(error as Error)
    }
  }

  async function removeData(place: Place) {
    try {
      setIsLoading(true)
      await updateDoc(docRef, {
        places: arrayRemove(place),
      })
      setIsLoading(false)
    } catch (error) {
      setIsError(error as Error)
    }
  }

  return { isError, isLoading, addData, removeData }
}
