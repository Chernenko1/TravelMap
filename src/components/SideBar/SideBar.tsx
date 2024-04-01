import styles from './SideBar.module.css'
import AppIcon from '@assets/svg/AppIcon.svg'
import { useState } from 'react'
import { IoSearch, IoBookmarkSharp, IoManSharp } from 'react-icons/io5'
import { SidebarMenu } from './SideBarPanel'
import { SearchMenu } from './SidebarPanels/SearchMenu'

export const SideBar = () => {
  const [openSearchMenu, setOpenSearchMenu] = useState<boolean>(false)

  return (
    <div style={{ display: 'flex' }}>
      <header className={styles.sideBar}>
        <section className={styles.buttons}>
          <div className={styles.appLogo}>
            <img src={AppIcon} title='appLogo' />
          </div>
          <div>
            <button className={styles.searchButton}>
              <IoSearch size={20} color='blue' />
            </button>
          </div>
          <div>
            <button className={styles.markButton}>
              <IoBookmarkSharp size={20} color='pink' />
            </button>
          </div>
        </section>
        <section className={styles.profileContainer}>
          <button className={styles.markButton}>
            <IoManSharp size={20} color='green' />
          </button>
        </section>
      </header>
      <SidebarMenu isOpen={true} component={<SearchMenu />} />
    </div>
  )
}
