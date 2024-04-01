import styles from './Categories.module.css'
import { SEARCH_CATEGORIES } from '@constants/SEARCH_CATEGORIES'

export const Categories = () => {
  return (
    <>
      {SEARCH_CATEGORIES.map(({ title, icon }) => {
        return (
          <div className={styles.categoriesContainer} key={title}>
            <img src={icon} className={styles.icons} />
            <p>{title}</p>
          </div>
        )
      })}
    </>
  )
}
