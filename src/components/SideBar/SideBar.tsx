import AppIcon from '@assets/svg/AppIcon.svg'
import { useAuth } from '@hooks/useAuth'
import { removeUser } from '@store/actions/userSlice'
import { useAppDispatch } from '@store/hooks'
import { IoBookmark, IoEnter, IoExit, IoSearch } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './SideBar.module.css'
import { paths } from '@constants/paths'

export const SideBar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { isAuth } = useAuth()

  const dispatch = useAppDispatch()

  function handleProfileButton() {
    isAuth ? dispatch(removeUser()) : navigate('/login')
  }

  function openSearchPanel() {
    pathname === paths.search ? navigate(paths.main) : navigate(paths.search)
  }

  function openFavouritePanel() {
    pathname === paths.favourites ? navigate(paths.main) : navigate(paths.favourites)
  }

  return (
    <div style={{ display: 'flex' }}>
      <header className={styles.sideBar}>
        <section className={styles.upContainer}>
          <div className={styles.appLogo}>
            <img src={AppIcon} title='appLogo' />
          </div>
          <div className={styles.upButtons}>
            <button
              className={pathname === paths.search ? styles.buttonSearchOn : styles.buttonSearch}
              onClick={openSearchPanel}
              type='button'
              title='меню поиска'
            >
              <IoSearch size={24} />
            </button>

            <button
              className={pathname === paths.favourites ? styles.buttonFavouritesOn : styles.buttonFavourites}
              onClick={openFavouritePanel}
              type='button'
              title='избранное'
            >
              <IoBookmark size={20} />
            </button>
          </div>
        </section>
        <section className={styles.profileContainer}>
          <button title='prof' type='button' className={styles.profileButton} onClick={handleProfileButton}>
            {isAuth ? <IoExit size={24} /> : <IoEnter size={24} />}
          </button>
        </section>
      </header>
    </div>
  )
}
