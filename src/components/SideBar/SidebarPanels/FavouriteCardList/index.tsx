import { ScrollMenu } from '@components/ScrollMenu/ScrollMenu'
import styles from './styles.module.css'
import { useAppSelector } from '@store/hooks'
import { FavouriteCard } from '@components/FavouriteCard'

export const FavouriteCardList = () => {
  const places = useAppSelector((state) => state.favPlaces.places)

  return (
    <ScrollMenu>
      <ul className={styles.cards}>
        {places.map((place) => (
          <FavouriteCard key={place.placeId} place={place} />
        ))}
      </ul>
    </ScrollMenu>
  )
}
