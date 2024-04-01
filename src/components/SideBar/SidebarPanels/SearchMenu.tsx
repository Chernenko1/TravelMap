import { Input } from '@components/Input/Input'
import { ScrollMenu } from '@components/ScrollMenu/ScrollMenu'
import { SearchButton } from '@components/SearchButton/SearchButton'
import { Categories } from './Categories/Categories'
import styles from './SearchMenu.module.css'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { setRadius, setSearchPlace } from '@store/actions/searchSlice'

export const SearchMenu = () => {
  const { radius, searchPlaces } = useAppSelector((state) => state.search)

  const [vRadius, setVRadius] = useState(radius)
  const [places, setPlaces] = useState(searchPlaces)

  const dispatch = useAppDispatch()

  function handleClickRadius(event: React.ChangeEvent<HTMLInputElement>) {
    setVRadius(event.target.value)
  }

  function handleClickCategories(value: string) {
    if (places.includes(value)) {
      let arr = places.filter((place) => place !== value)
      setPlaces(arr)
    } else {
      setPlaces([...places, value])
    }
  }

  function searchClick() {
    dispatch(setRadius(vRadius))
    dispatch(setSearchPlace(places))
  }

  return (
    <div className={styles.searchMenu}>
      <div>
        <div className={styles.inputSearch}>
          <Input placeholder='Место, адрес.... ' />
        </div>
        <div className={styles.settingsContainer}>
          <h3>Искать: </h3>
          <ScrollMenu>
            <Categories places={places} handleChange={handleClickCategories} />
          </ScrollMenu>
          <h3>В радиусе:</h3>
          <div className={styles.inputRadiusContainer}>
            <div className={styles.inputRadius}>
              <Input value={vRadius} onChange={handleClickRadius} type='number' />
            </div>
            <p>метров</p>
          </div>
        </div>
      </div>
      <SearchButton onClick={searchClick} />
    </div>
  )
}
