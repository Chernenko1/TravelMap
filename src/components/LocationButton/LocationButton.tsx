import { useGeolocation } from '@hooks/useGeolocation'
import styles from './LocationButton.module.css'
import { LocationCross } from '@components/MapIcons/LocationCross'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { useState } from 'react'
import { setMoveCoords } from '@store/actions/searchSlice'

export const LocationButton = () => {
  const [color, setColor] = useState('gray')

  const dispatch = useAppDispatch()
  let { getUserLocation } = useGeolocation()
  const coords = useAppSelector((state) => state.search.userCoords)

  function moveToCoords() {
    getUserLocation()
    dispatch(setMoveCoords(coords))
  }

  return (
    <button
      className={styles.locationButton}
      onMouseMove={() => {
        setColor('black')
      }}
      onMouseOut={() => setColor('gray')}
      onClick={moveToCoords}
    >
      <LocationCross size={32} color={color} />
    </button>
  )
}
