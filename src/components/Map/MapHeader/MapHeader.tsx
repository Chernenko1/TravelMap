import { IoNavigateCircleOutline } from 'react-icons/io5'
import styles from './MapHeader.module.css'

export const MapHeader = () => {
  return (
    <article className={styles.mapHeader}>
      <section>
        <input type='text' />
        <input type='text' />
        <button type='submit'>Search</button>
        <button className={styles.centeringButton} onClick={() => console.log(1)}>
          <IoNavigateCircleOutline size={24} color='red' style={{ position: 'relative', top: 7 }} />
        </button>
      </section>
      <section className={styles.infoSection}>
        <p>AAA</p>
        <p>BBB</p>
      </section>
    </article>
  )
}
