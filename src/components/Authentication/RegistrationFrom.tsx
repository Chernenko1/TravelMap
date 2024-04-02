import { ErrorMessage, Field, Form, FormikErrors, FormikProps, withFormik } from 'formik'

import styles from './Form.module.css'

interface RegValues {
  login: string
  email: string
  password: string
}

interface OtherProps {
  message: string
}

interface IFormProps {
  initialEmail?: string
  initialPassword?: string
  message: string
}

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const InnerForm = (props: OtherProps & FormikProps<RegValues>) => {
  const { touched, errors, isSubmitting, message } = props

  return (
    <Form className={styles.loginForm}>
      <h1 className={styles.headerTitle}>{message}</h1>
      <div className={styles.formContainer}>
        <div>
          <Field type='text' name='login' className={styles.form} placeholder='Ваше имя' />
        </div>

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
          {touched.password && errors.password && <div className={styles.error}>{errors.password}</div>}
          <Field
            type='password'
            name='password'
            // pattern={`[${passwordPattern}]`}
            title='Пароль должен быть длинной > 8 символов, содержать специальный символ и заглавную букву'
            className={styles.form}
            style={{ borderColor: touched.password && errors.password && 'red' }}
            placeholder='Пароль'
          />
        </div>
      </div>

      <button type='submit' disabled={isSubmitting} className={styles.button}>
        Войти
      </button>
    </Form>
  )
}

export const RegistrationForm = withFormik<IFormProps, RegValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || '',
      login: '',
      password: props.initialPassword || '',
    }
  },
  validate: (values: RegValues) => {
    let errors: FormikErrors<RegValues> = {}
    if (!values.email) {
      errors.email = 'Поле не может быть пустым'
    } else if (!values.email) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
      errors.password = 'Поле не может быть пустым'
    } else if (!passwordPattern.test(values.password)) {
      errors.password = 'Пароль не подходит'
    }
    return errors
  },

  handleSubmit: (values) => {
    console.log(values)
  },
})(InnerForm)
