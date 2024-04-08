import { database } from '@components/Firebase'
import { getDoc, doc } from 'firebase/firestore'

export async function getDataFromFirestore(userId: string) {
  try {
    const docRef = doc(database, 'Users', userId)
    const docSnap = await getDoc(docRef)
  } catch (error) {
    console.log(error)
  }
}
