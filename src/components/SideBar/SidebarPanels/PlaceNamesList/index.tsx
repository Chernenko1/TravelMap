import { ScrollMenu } from '@components/ScrollMenu/ScrollMenu'
import styles from './styles.module.css'
import { SEARCH_CATEGORIES } from '@constants/categories'

interface ICategories {
  places: string[]
  handleChange: (value: string) => void
}

export const Categories = ({ places, handleChange }: ICategories) => {
  return (
    <ScrollMenu>
      <ul>
        {SEARCH_CATEGORIES.map(({ title, icon, value }) => {
          return (
            <li
              className={!places.includes(value) ? styles.noSelected : styles.selected}
              onClick={() => handleChange(value)}
              key={title}
            >
              <div className={styles.categories}>
                <img src={icon} className={styles.icons} />
                <p>{title}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </ScrollMenu>
  )
}
