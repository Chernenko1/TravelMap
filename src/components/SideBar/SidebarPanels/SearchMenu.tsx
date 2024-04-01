import { Input } from '@components/Input/Input'
import { ScrollMenu } from '@components/ScrollMenu/ScrollMenu'
import { SEARCH_CATEGORIES } from '@constants/SEARCH_CATEGORIES'

import styles from './SearchMenu.module.css'
import { SearchButton } from '@components/SearchButton/SearchButton'
import { Categories } from './Categories/Categories'

export const SearchMenu = () => {
  return (
    <div className={styles.searchMenu}>
      <div>
        <div className={styles.inputSearch}>
          <Input placeholder='Место, адрес.... ' />
        </div>
        <div className={styles.settingsContainer}>
          <h3>Искать: </h3>
          <ScrollMenu>
            <Categories />
          </ScrollMenu>
          <h3>В радиусе:</h3>
          <div className={styles.inputRadiusContainer}>
            <div className={styles.inputRadius}>
              <Input placeholder='Радиус' />
            </div>
            <p>метров</p>
          </div>
        </div>
      </div>
      <SearchButton />
    </div>
  )
}
