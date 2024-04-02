import { IoReturnUpForwardOutline } from 'react-icons/io5'
import { IoHeartOutline } from 'react-icons/io5'
import styles from './MarkerDescription.module.css'
interface IMarkerDescription {
  name: string
  address_line: string
  distance: number
}

const iconSize = 24

export const MarkerDescription = ({ name, address_line, distance }: IMarkerDescription) => {
  return (
    <div>
      <div>
        <header className={styles.header}>
          <h3>{name}</h3>
          <IoHeartOutline size={iconSize} />
        </header>

        <p>{address_line}</p>

        <div className={styles.footer}>
          <p>Distance: {distance}</p>
          <IoReturnUpForwardOutline size={iconSize} />
        </div>
      </div>
    </div>
  )
}
