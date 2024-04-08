import AppIcon from '@assets/svg/AppIcon.svg'
import { SideBarButton } from '@components/SideBarButton/SideBarButton'
import { useAuth } from '@hooks/useAuth'
import { removeUser } from '@store/actions/userSlice'
import { useAppDispatch } from '@store/hooks'
import { useState } from 'react'
import { IoBookmark, IoEnter, IoExit, IoSearch } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import styles from './SideBar.module.css'
import { SidebarMenu } from './SideBarPanel'
import { FeaturesPanel } from './SidebarPanels/FeaturesPanel'
import { SearchMenu } from './SidebarPanels/SearchMenu'

export const SideBar = () => {
  const [isOpenSearchMenu, setIsOpenSearchMenu] = useState<boolean>(false)
  const [isOpenFavouritePanel, setIsOpenFavouritePanel] = useState<boolean>(false)

  const navigate = useNavigate()
  const { isAuth } = useAuth()

  const dispatch = useAppDispatch()

  function handleProfileButton() {
    isAuth ? dispatch(removeUser()) : navigate('/login')
  }

  function openSerchMenu() {
    setIsOpenFavouritePanel(false)
    setIsOpenSearchMenu(!isOpenSearchMenu)
  }

  function openFavouritePanel() {
    setIsOpenSearchMenu(false)
    setIsOpenFavouritePanel(!isOpenFavouritePanel)
  }

  return (
    <div style={{ display: 'flex' }}>
      <header className={styles.sideBar}>
        <section className={styles.upContainer}>
          <div className={styles.appLogo}>
            <img src={AppIcon} title='appLogo' />
          </div>
          <div className={styles.upButtons}>
            <SideBarButton
              color='#5E7BC7'
              type='button'
              style={{ backgroundColor: '#5E7BC7' }}
              title='search'
              onClick={openSerchMenu}
            >
              <IoSearch size={24} />
            </SideBarButton>

            <SideBarButton
              color='#C75E5E'
              type='button'
              style={{ backgroundColor: '#C75E5E' }}
              title='mark'
              onClick={openFavouritePanel}
            >
              <IoBookmark size={20} />
            </SideBarButton>
          </div>
        </section>
        <section className={styles.profileContainer}>
          <SideBarButton
            title='prof'
            type='button'
            style={{ backgroundColor: '#32CD32' }}
            onClick={handleProfileButton}
          >
            {isAuth ? <IoExit size={24} /> : <IoEnter size={24} />}
          </SideBarButton>
        </section>
      </header>
      <SidebarMenu isOpen={isOpenSearchMenu} component={<SearchMenu />} />
      <SidebarMenu isOpen={isOpenFavouritePanel} component={<FeaturesPanel />} />
    </div>
  )
}
