import noImage from '@assets/images/noImage_2.jpg'
import styles from './PanelCard.module.css'
import { IoBookmark, IoCaretForward } from 'react-icons/io5'
import { useAppDispatch } from '@store/hooks'
import { useDataToFirestore } from '@hooks/useDataToFirestore'
import { deleteFavPlace } from '@store/actions/favPlaces'
import { setFoundPlaces, setMoveCoords } from '@store/actions/searchSlice'

interface IPanelCard {
  place: Place
}

export const PanelCard = ({ place }: IPanelCard) => {
  const { coords, name } = place

  const dispatch = useAppDispatch()
  const { removeData, isError } = useDataToFirestore()

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
    <div className={styles.panelCard}>
      <div className={styles.header}>
        <img src={noImage} className={styles.image} />
        <p>{name}</p>
      </div>

      <div className={styles.description}>
        <p>{description.substring(0, limit) + '...'}</p>
      </div>

      <div className={styles.buttons}>
        <IoBookmark size={24} color='#C75E5E' onClick={removePlace} />
        <IoCaretForward size={24} onClick={moveToPlace} />
      </div>
    </div>
  )
}
