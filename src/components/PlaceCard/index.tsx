import noImage from '@assets/images/noImage_2.jpg'
import { Input } from '@components/Input/Input'
import { getPlace } from '@utils/getPlaces'
import { useEffect, useState } from 'react'
import { IoBookmark, IoCaretBack, IoLocationSharp } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import styles from './styles.module.css'

export const PlaceCard = () => {
  const [place, setPlace] = useState<Properties>()
  const { id } = useParams()

  async function searchPlace() {
    let response = await getPlace(id as string)
    setPlace(response)
  }

  useEffect(() => {
    searchPlace()
  }, [])

  const description =
    'Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare  begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast svennefiera håven postfaktisk. Atomslöjd defåling nigovena tegt i platt-tv. Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don. Apfälla menskopp eftersom spetät senessa inklusive mepaktiga. Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster. Hjärtslagslag defånera. Neck röstsamtal möbelhund. Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos. Du kan vara drabbad. '

  return (
    <div className={styles.placeCardContainer}>
      <div className={styles.inputSearch}>
        <Input placeholder='Место, адрес.... ' />
      </div>

      <div className={styles.header}>
        <IoCaretBack size={22} />
        <p>Избранное</p>
      </div>

      <div className={styles.placeCard}>
        <img src={noImage} className={styles.image} />
        <div>
          <h3>{place?.name}</h3>
          <p className={styles.description}>{description}</p>

          <div className={styles.buttons}>
            <div className={styles.favButton}>
              <IoBookmark size={20} />
              <p>Сохранено</p>
            </div>
            <div className={styles.routeButton}>
              <IoLocationSharp size={20} />
              <p>Маршрут</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
