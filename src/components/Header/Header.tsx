import styles from './Header.module.css'
import { IoBookmarkSharp } from 'react-icons/io5'

export const Header = () => {
  return (
    <article className={styles.header}>
      <section className={styles.headerTitle}>
        <p>TravelMap</p>
      </section>
      <section className={styles.headerButtons}>
        <button className={styles.buttonFavorite}>
          <IoBookmarkSharp />
        </button>
        <button className={styles.buttonLogin}>Вход</button>
      </section>
    </article>
  )
}
