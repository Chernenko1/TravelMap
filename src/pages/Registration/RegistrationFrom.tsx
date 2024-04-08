import { Authentication } from '@components/Authentication/Authentication'
import styles from '@components/Authentication/Form.module.css'
import { useUserAuthentication } from '@hooks/useUserAuthentication'
import { Field, Form, Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

interface RegValues {
  email: string
  password: string
}

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Некорректный адрес').required('Поле не может быть пустым'),
  password: Yup.string().min(7, 'Минимум 8 символов').required('Поле не может быть пустым'),
})

const initialValues: RegValues = {
  email: '',
  password: '',
}

export const RegistrationForm = () => {
  const { isLoading, isError, userRegistration } = useUserAuthentication()

  const navigate = useNavigate()

  function handleSubmit(values: RegValues) {
    userRegistration(values)
    if (!!isError) {
      navigate('/')
    }
  }

  return (
    <Formik initialValues={initialValues} validationSchema={SignInSchema} onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Authentication>
          <Form className={styles.loginForm}>
            <h1 className={styles.headerTitle}>Регистрация</h1>
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
              {isError && <div className={styles.resError}>{isError}</div>}
            </div>

            <button type='submit' disabled={isLoading} className={styles.button}>
              Регистрация
            </button>

            <div className={styles.newUser}>
              <p>Уже есть аккаунт?</p>
              <Link to={'/login'}>
                <p>Войти</p>
              </Link>
            </div>
          </Form>
        </Authentication>
      )}
    </Formik>
  )
}
