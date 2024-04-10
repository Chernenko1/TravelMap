import { PanelCard } from '@components/FavouritesCards/PanelCard'
import { Input } from '@components/Input/Input'
import { ScrollMenu } from '@components/ScrollMenu/ScrollMenu'
import styles from './FavouritesPanel.module.css'
import { useAppSelector } from '@store/hooks'

export const FeaturesPanel = () => {
  const places = useAppSelector((state) => state.favPlaces.places)

  return (
    <div className={styles.featuresPanel}>
      <div className={styles.inputSearch}>
        <Input placeholder='Место, адрес.... ' />
      </div>

      <div className={styles.infoContainer}>
        <p>Избранное: </p>
        <ScrollMenu>
          <div className={styles.cards}>
            {places.map((place) => (
              <PanelCard key={place.placeId} place={place} />
            ))}
          </div>
        </ScrollMenu>
      </div>
    </div>
  )
}
