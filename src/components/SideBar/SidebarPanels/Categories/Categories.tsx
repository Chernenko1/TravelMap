import styles from './Categories.module.css'
import { SEARCH_CATEGORIES } from '@constants/categories'

interface ICategories {
  places: string[]
  handleChange: (value: string) => void
}

export const Categories = ({ places, handleChange }: ICategories) => {
  return (
    <>
      {SEARCH_CATEGORIES.map(({ title, icon, value }) => {
        return (
          <div
            className={!places.includes(value) ? styles.lightContainer : ''}
            onClick={() => handleChange(value)}
            key={title}
          >
            <div className={styles.categoriesContainer}>
              <img src={icon} className={styles.icons} />
              <p>{title}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}
