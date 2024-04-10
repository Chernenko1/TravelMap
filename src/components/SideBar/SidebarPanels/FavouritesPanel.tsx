import { PanelCard } from '@components/FavouritesCards/PanelCard'
import { Input } from '@components/Input/Input'
import { ScrollMenu } from '@components/ScrollMenu/ScrollMenu'
import styles from './FavouritesPanel.module.css'
import { useAppSelector } from '@store/hooks'

export const FeaturesPanel = () => {
  const placeIds = useAppSelector((state) => state.favPlaces.id)

  return (
    <div className={styles.featuresPanel}>
      <div className={styles.inputSearch}>
        <Input placeholder='Место, адрес.... ' />
      </div>

      <div className={styles.infoContainer}>
        <p>Избранное: </p>
        <ScrollMenu>
          <div className={styles.cards}>
            <PanelCard
              title={'Заглавное название'}
              description='Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare  begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast svennefiera håven postfaktisk. Atomslöjd defåling nigovena tegt i platt-tv. Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don. Apfälla menskopp eftersom spetät senessa inklusive mepaktiga. Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster. Hjärtslagslag defånera. Neck röstsamtal möbelhund. Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos. Du kan vara drabbad. '
            />
          </div>
        </ScrollMenu>
      </div>
    </div>
  )
}
