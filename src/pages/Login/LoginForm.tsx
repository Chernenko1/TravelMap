import { Authentication } from '@components/Authentication/Authentication'
import styles from '@components/Authentication/Form.module.css'
import { useUserAuthentication } from '@hooks/useUserAuthentication'
import { Field, Form, Formik } from 'formik'
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

export const LoginForm = () => {
  const { userLogin, isError, isLoading } = useUserAuthentication()

  const navigate = useNavigate()

  function handleSubmit(values: LoginValues) {
    userLogin(values)
    if (!!isError) {
      navigate('/')
    }
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
              {isError && <div className={styles.resError}>{isError}</div>}
            </div>

            <button type='submit' disabled={isLoading} className={styles.button}>
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
