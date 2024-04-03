import { Field, Form, FormikErrors, FormikProps, withFormik } from 'formik'

import styles from './Form.module.css'
import { signIn } from '@utils/signIn'

interface LoginValues {
  email: string
  password: string
}

interface OtherProps {
  message: string
}

interface IFormProps {
  initialEmail?: string
  message: string
}

const InnerForm = (props: OtherProps & FormikProps<LoginValues>) => {
  const { touched, errors, isSubmitting, message } = props

  return (
    <Form className={styles.loginForm}>
      <h1 className={styles.headerTitle}>{message}</h1>
      <div className={styles.formContainer}>
        <div>
          {touched.email && errors.email && <div className={styles.error}>{errors.email}</div>}
          <Field
            type='email'
            name='email'
            className={styles.form}
            style={{ borderColor: touched.email && errors.email && 'red' }}
            placeholder='Почта'
          />
        </div>

        <div>
          <Field type='password' name='password' className={styles.form} placeholder='Пароль' />
          {touched.password && errors.password && <div>{errors.password}</div>}
        </div>
      </div>

      <button type='submit' disabled={isSubmitting} className={styles.button}>
        Войти
      </button>
    </Form>
  )
}

export const LoginForm = withFormik<IFormProps, LoginValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || '',
      password: '',
    }
  },
  validate: (values: LoginValues) => {
    let errors: FormikErrors<LoginValues> = {}
    if (!values.email) {
      errors.email = 'Поле не может быть пустым'
    } else if (!values.email) {
      errors.email = 'Invalid email address'
    }
    return errors
  },

  handleSubmit: (values) => {
    console.log(1)
    try {
      console.log(signIn(values.email, values.password))
    } catch (error) {
      console.log(error)
    }
  },
})(InnerForm)
