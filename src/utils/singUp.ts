import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export function signUp(email: string, password: string) {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      return user
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })
}
