import { Input } from '@components/Input/Input'
import styles from './styles.module.css'
import { useAuth } from '@hooks/useAuth'
import { NotLogIn } from '@components/Warnings/NotLogIn'
import { FavouriteCardList } from '../FavouriteCardList'

export const FavouritesPanel = () => {
  const { isAuth } = useAuth()

  return (
    <div className={styles.featuresPanel}>
      <div className={styles.inputSearch}>
        <Input placeholder='Место, адрес.... ' />
      </div>
      <div className={styles.infoContainer}>
        <p>Избранное: </p>
        {isAuth ? <FavouriteCardList /> : <NotLogIn />}
      </div>
    </div>
  )
}
