import { PanelCard } from '@components/FavouriteCard'
import { Input } from '@components/Input/Input'
import { ScrollMenu } from '@components/ScrollMenu/ScrollMenu'
import styles from './FavouritePlaces.module.css'
import { useAppSelector } from '@store/hooks'
import { useAuth } from '@hooks/useAuth'
import { NotLogIn } from '@components/Warnings/NotLogIn'

export const FavouritesPanel = () => {
  const places = useAppSelector((state) => state.favPlaces.places)
  const { isAuth } = useAuth()

  return (
    <div className={styles.featuresPanel}>
      <div className={styles.inputSearch}>
        <Input placeholder='Место, адрес.... ' />
      </div>

      <div className={styles.infoContainer}>
        <p>Избранное: </p>
        {isAuth ? (
          <ScrollMenu>
            <div className={styles.cards}>
              {places.map((place) => (
                <PanelCard key={place.placeId} place={place} />
              ))}
            </div>
          </ScrollMenu>
        ) : (
          <NotLogIn />
        )}
      </div>
    </div>
  )
}
