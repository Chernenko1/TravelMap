import noImage from '@assets/images/noImage_2.jpg'
import styles from './styles.module.css'
import { IoBookmark, IoCaretForward } from 'react-icons/io5'
import { useAppDispatch } from '@store/hooks'
import { useDataToFirestore } from '@hooks/useDataToFirestore'
import { deleteFavPlace } from '@store/actions/favPlaces'
import { setMoveCoords } from '@store/actions/searchSlice'
import { useAuth } from '@hooks/useAuth'
import { Link } from 'react-router-dom'

interface IPanelCard {
  place: Place
}

export const FavouriteCard = ({ place }: IPanelCard) => {
  const { coords, name, placeId } = place

  const { isAuth } = useAuth()
  const dispatch = useAppDispatch()
  const { removeData, isError } = useDataToFirestore(isAuth)

  function removePlace() {
    removeData(place)
    !isError && dispatch(deleteFavPlace(place.placeId))
  }

  function moveToPlace() {
    dispatch(setMoveCoords(coords))
  }

  const description =
    'Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare  begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast svennefiera håven postfaktisk. Atomslöjd defåling nigovena tegt i platt-tv. Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don. Apfälla menskopp eftersom spetät senessa inklusive mepaktiga. Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster. Hjärtslagslag defånera. Neck röstsamtal möbelhund. Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos. Du kan vara drabbad. '
  const limit = 200

  return (
    <li className={styles.panelCard}>
      <div className={styles.header}>
        <img src={noImage} className={styles.image} />
        <p>{name}</p>
      </div>

      <div className={styles.description}>
        <p>{description.substring(0, limit) + '...'}</p>
      </div>

      <div className={styles.buttons}>
        <IoBookmark size={24} color='#C75E5E' onClick={removePlace} />
        <Link to={`/favourites/${placeId}`} color='black'>
          <IoCaretForward size={24} onClick={moveToPlace} />
        </Link>
      </div>
    </li>
  )
}
