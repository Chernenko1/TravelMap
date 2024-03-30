import { IoNavigateCircleOutline } from 'react-icons/io5'
import styles from './MapHeader.module.css'

interface IMapHeader {}

export const MapHeader = ({}: IMapHeader) => {
  return (
    <article className={styles.mapHeader}>
      <section className={styles.inputContainer}>
        <input type='text' />

        <input type='text' />
      </section>
      <section>
        <button type='submit'>Search</button>
        <button className={styles.centeringButton}>
          <IoNavigateCircleOutline size={24} color='red' style={{ position: 'relative', top: 7 }} />
        </button>
      </section>
      <section className={styles.infoSection}>
        <p>Duration: {}</p>
        <p>Distance : {}</p>
      </section>
    </article>
  )
}
