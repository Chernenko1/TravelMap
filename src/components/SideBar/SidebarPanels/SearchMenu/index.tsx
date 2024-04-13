import { Input } from '@components/Input/Input'
import { SearchButton } from '@components/SearchButton/SearchButton'
import { PlaceNameList } from '../PlaceNamesList'
import styles from './styles.module.css'
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
        <div>
          <Input placeholder='Место, адрес.... ' />
        </div>
        <div>
          <h3>Искать: </h3>
          <div className={styles.categories}>
            <PlaceNameList places={places} handleChange={handleClickCategories} />
          </div>
        </div>

        <div>
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
