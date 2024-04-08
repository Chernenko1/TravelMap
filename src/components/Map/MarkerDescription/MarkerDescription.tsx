import { IoReturnUpForwardOutline, IoBookmark, IoBookmarkOutline } from 'react-icons/io5'
import noImage from '@assets/images/noimage.png'
import styles from './MarkerDescription.module.css'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { addFavPlace, deleteFavPlace } from '@store/actions/favPlaces'
import { useDataToFirestore } from '@hooks/useDataToFirestore'

interface IMarkerDescription {
  name: string
  address_line: string
  distance: number
  id: string
}

const iconSize = 24

export const MarkerDescription = ({ name, address_line, distance, id }: IMarkerDescription) => {
  const { addData, removeData, isError } = useDataToFirestore()
  const favPlace = useAppSelector((state) => state.favPlaces.id).includes(id)

  const dispatch = useAppDispatch()

  function addPlaceToState() {
    if (favPlace) {
      removeData(id)
      !isError && dispatch(deleteFavPlace(id))
    } else {
      addData(id)
      !isError && dispatch(addFavPlace(id))
    }
  }

  return (
    <div>
      <div>
        <header className={styles.header}>
          <h3>{name}</h3>
          <div onClick={addPlaceToState}>
            {favPlace ? <IoBookmark size={iconSize} color='#C75E5E' /> : <IoBookmarkOutline size={iconSize} />}
          </div>
        </header>

        <div className={styles.imageContainer}>
          <img src={noImage} className={styles.image} />
        </div>

        <p>{address_line}</p>

        <div className={styles.footer}>
          <p>Distance: {distance}</p>
          <IoReturnUpForwardOutline size={iconSize} />
        </div>
      </div>
    </div>
  )
}
