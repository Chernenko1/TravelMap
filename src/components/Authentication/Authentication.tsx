import AuthImage from '@assets/svg/authImg.svg'
import React from 'react'
import styles from './Authentication.module.css'

interface IAuth {
  children?: React.ReactNode
}

export const Authentication = ({ children }: IAuth) => {
  return (
    <div className={styles.authWrapper}>
      <div className={styles.authContainer}>{children}</div>
      <div className={styles.authImg}>
        <img src={AuthImage} />
      </div>
    </div>
  )
}
