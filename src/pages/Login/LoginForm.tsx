import { Authentication } from '@components/Authentication/Authentication'
import styles from '@components/Authentication/Form.module.css'
import { firebaseErrors } from '@constants/firebase'
import { setUser } from '@store/actions/userSlice'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

interface LoginValues {
  email: string
  password: string
}

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Некорректный адрес').required('Поле не может быть пустым'),
  password: Yup.string().min(7, 'Минимум 8 символов').required('Поле не может быть пустым'),
})

const initialValues: LoginValues = {
  email: '',
  password: '',
}

type ErrorCodes = 'auth/too-many-requests' | 'auth/invalid-credential'

export const LoginForm = () => {
  const [resError, setResError] = useState('')

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  function handleSubmit(values: LoginValues) {
    setResError('')
    const auth = getAuth()
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(({ user }) => {
        dispatch(setUser({ id: user.uid, email: user.email }))
        navigate('/')
      })
      .catch(({ code }: { code: ErrorCodes }) => {
        console.log(code)
        setResError(firebaseErrors[code])
      })
  }

  return (
    <Formik initialValues={initialValues} validationSchema={SignInSchema} onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Authentication>
          <Form className={styles.loginForm}>
            <h1 className={styles.headerTitle}>Вход</h1>
            <div className={styles.formContainer}>
              <div>
                {touched.email && errors.email && <div className={styles.errorInForm}>{errors.email}</div>}
                <Field
                  type='email'
                  name='email'
                  className={styles.form}
                  style={{ borderColor: touched.email && errors.email && 'red' }}
                  placeholder='Почта'
                />
              </div>

              <div>
                {touched.password && errors.password && <div className={styles.errorInForm}>{errors.password}</div>}
                <Field
                  type='password'
                  name='password'
                  className={styles.form}
                  style={{ borderColor: touched.email && errors.email && 'red' }}
                  placeholder='Пароль'
                />
              </div>
              {resError && <div className={styles.resError}>{resError}</div>}
            </div>

            <button type='submit' className={styles.button}>
              Войти
            </button>

            <div className={styles.newUser}>
              <p>Нет аккаунта?</p>
              <Link to={'/registration'}>
                <p>Создать аккаунт</p>
              </Link>
            </div>
          </Form>
        </Authentication>
      )}
    </Formik>
  )
}
