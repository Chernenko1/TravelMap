import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5'
import noImage from '@assets/images/noimage.png'
import styles from './MarkerDescription.module.css'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { addFavPlace, deleteFavPlace } from '@store/actions/favPlaces'
import { useDataToFirestore } from '@hooks/useDataToFirestore'
import { useAuth } from '@hooks/useAuth'
interface IMarkerDescription {
  place: Place
}

const iconSize = 24

export const MarkerDescription = ({ place }: IMarkerDescription) => {
  const { isAuth } = useAuth()
  const { addData, removeData, isError } = useDataToFirestore(isAuth)

  const placeId = useAppSelector((state) => state.favPlaces.places)
    .map((place) => place.placeId)
    .includes(place.placeId)

  const dispatch = useAppDispatch()

  function addPlaceToState() {
    if (placeId) {
      removeData(place)
      !isError && dispatch(deleteFavPlace(place.placeId))
    } else {
      addData(place)
      !isError && dispatch(addFavPlace(place))
    }
  }

  return (
    <div className={styles.popup}>
      <div>
        <header className={styles.header}>
          <h3>{place.name}</h3>

          {isAuth && (
            <div onClick={addPlaceToState} className={styles.favIcon}>
              {placeId ? <IoBookmark size={iconSize} color='#C75E5E' /> : <IoBookmarkOutline size={iconSize} />}
            </div>
          )}
        </header>

        <div className={styles.imageContainer}>
          <img src={noImage} className={styles.image} />
        </div>

        <p>{place.address}</p>
      </div>
    </div>
  )
}
