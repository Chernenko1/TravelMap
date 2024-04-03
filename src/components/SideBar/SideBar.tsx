import styles from './SideBar.module.css'
import AppIcon from '@assets/svg/AppIcon.svg'
import { useState } from 'react'
import { IoSearch, IoBookmarkSharp, IoManSharp, IoExit, IoEnter } from 'react-icons/io5'
import { SidebarMenu } from './SideBarPanel'
import { SearchMenu } from './SidebarPanels/SearchMenu'
import { SideBarButton } from '@components/SideBarButton/SideBarButton'
import { useAuth } from '@hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@store/hooks'
import { removeUser } from '@store/actions/userSlice'

export const SideBar = () => {
  const [openSearchMenu, setOpenSearchMenu] = useState<boolean>(false)

  const navigate = useNavigate()
  const { isAuth } = useAuth()

  const dispatch = useAppDispatch()

  function handleProfileButton() {
    isAuth ? dispatch(removeUser()) : navigate('/login')
  }

  return (
    <div style={{ display: 'flex' }}>
      <header className={styles.sideBar}>
        <section className={styles.upContainer}>
          <div className={styles.appLogo}>
            <img src={AppIcon} title='appLogo' />
          </div>
          <div className={styles.upButtons}>
            <SideBarButton color='#5E7BC7' type='button' style={{ backgroundColor: '#5E7BC7' }} title='search'>
              <IoSearch size={24} />
            </SideBarButton>

            <SideBarButton color='#C75E5E' type='button' style={{ backgroundColor: '#C75E5E' }} title='mark'>
              <IoBookmarkSharp size={20} />
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
      <SidebarMenu isOpen={true} component={<SearchMenu />} />
    </div>
  )
}
