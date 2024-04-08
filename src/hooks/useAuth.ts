import { useAppSelector } from '@store/hooks'

export function useAuth() {
  const { email } = useAppSelector((state) => state.user)

  return {
    isAuth: !!email,
    email,
  }
}
