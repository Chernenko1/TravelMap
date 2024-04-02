import AuthImage from '@assets/svg/authImg.svg'
import styles from './Authentication.module.css'
import { Field, Form, Formik } from 'formik'
import { LoginForm } from './LoginForm'
import { RegistrationForm } from './RegistrationFrom'

interface IFormAuth {
  email: string
  password: string
}

export const Authentication = () => {
  const initialValues: IFormAuth = { email: '', password: '' }

  return (
    <div className={styles.authWrapper}>
      <div className={styles.authContainer}>
        <RegistrationForm message='Регистрация' />
      </div>
      <div className={styles.authImg}>
        <img src={AuthImage} />
      </div>
    </div>
  )
}
