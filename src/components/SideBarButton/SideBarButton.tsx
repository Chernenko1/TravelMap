import styles from './SideBarButton.module.css'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ISideBarIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

export const SideBarButton = ({ children, ...rest }: ISideBarIcon) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  )
}
