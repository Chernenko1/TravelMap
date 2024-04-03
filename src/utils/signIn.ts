import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export function signIn(email: string, password: string) {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      return user
    })
    .catch((error) => {
      return error
    })
}
