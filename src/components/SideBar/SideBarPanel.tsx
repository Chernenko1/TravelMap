import React from 'react'
import styles from './SideBarPanel.module.css'

interface ISideBarMenu {
  isOpen: boolean
  component: React.ReactNode
}

export const SidebarMenu = ({ isOpen, component }: ISideBarMenu) => {
  if (isOpen) {
    return <div className={styles.sideBarMenu}>{component}</div>
  }
}
