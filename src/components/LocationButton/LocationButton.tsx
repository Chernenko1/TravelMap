import { MapController } from '@components/Map/MapController'
import styles from './LocationButton.module.css'
import { LocationCross } from '@components/MapIcons/LocationCross'
import { useState } from 'react'

interface ILocationButton {
  onClick?: () => void
}

export const LocationButton = ({ onClick }: ILocationButton) => {
  const [color, setColor] = useState('gray')

  return (
    <button
      className={styles.locationButton}
      onMouseMove={() => {
        setColor('black')
      }}
      onMouseOut={() => setColor('gray')}
      onClick={onClick}
    >
      <LocationCross size={32} color={color} />
    </button>
  )
}
