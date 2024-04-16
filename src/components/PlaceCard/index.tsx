import noImage from '@assets/images/noImage_2.jpg'
import { Input } from '@components/Input/Input'
import { getPlace } from '@utils/getPlaces'
import { useEffect, useState } from 'react'
import { IoBookmark, IoCaretBack, IoLocationSharp } from 'react-icons/io5'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { clearRouteCoordinates, setRouteCoords } from '@store/actions/searchSlice'

export const PlaceCard = () => {
  const [place, setPlace] = useState<Properties>()

  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const userCoords = useAppSelector((state) => state.search.userCoords)

  async function searchPlace() {
    let response = await getPlace(id as string)
    setPlace(response)
  }

  function setRoute() {
    dispatch(setRouteCoords({ from: userCoords, to: { lat: place?.lat as number, lng: place?.lon as number } }))
  }

  function goBack() {
    navigate(-1)
  }

  useEffect(() => {
    searchPlace()
    return () => {
      dispatch(clearRouteCoordinates())
    }
  }, [])

  const description =
    'Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare  begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast svennefiera håven postfaktisk. Atomslöjd defåling nigovena tegt i platt-tv. Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don. Apfälla menskopp eftersom spetät senessa inklusive mepaktiga. Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster. Hjärtslagslag defånera. Neck röstsamtal möbelhund. Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos. Du kan vara drabbad. '

  return (
    <div className={styles.placeCardContainer}>
      <div className={styles.inputSearch}>
        <Input placeholder='Место, адрес.... ' />
      </div>

      <div className={styles.header}>
        <button className={styles.backButton} onClick={goBack} type='button'>
          <IoCaretBack size={22} color='black' />
        </button>
        <p>Избранное</p>
      </div>

      <div className={styles.placeCard}>
        <img src={noImage} className={styles.image} />
        <div>
          <h3>{place?.name}</h3>
          <p className={styles.description}>{description}</p>

          <div className={styles.buttons}>
            <button className={styles.favButton} type='button'>
              <IoBookmark size={24} />
              <p>Сохранено</p>
            </button>
            <button className={styles.routeButton} onClick={setRoute} type='button'>
              <IoLocationSharp size={24} />
              <p>Маршрут</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
