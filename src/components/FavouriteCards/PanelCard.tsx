import noImage from '@assets/images/noImage_2.jpg'
import styles from './PanelCard.module.css'
import { IoBookmarkSharp, IoCaretForward } from 'react-icons/io5'

interface IPanelCard {
  title: string
  icons?: string[]
  description: string
}

export const PanelCard = ({ title, icons, description }: IPanelCard) => {
  const limit = 200

  return (
    <div className={styles.panelCard}>
      <div className={styles.header}>
        <img src={noImage} className={styles.image} />
        <p>{title}</p>
      </div>

      <div className={styles.description}>
        <p>{description.substring(0, limit) + '...'}</p>
      </div>

      <div className={styles.buttons}>
        <IoBookmarkSharp size={24} color='#C75E5E' />
        <IoCaretForward size={24} />
      </div>
    </div>
  )
}
