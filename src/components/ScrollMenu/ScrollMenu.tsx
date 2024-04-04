import styles from './ScrollMenu.module.css'

interface IScrollMenu {
  children?: React.ReactNode
}

export const ScrollMenu = ({ children }: IScrollMenu) => {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollMenu}>{children}</div>
    </div>
  )
}
