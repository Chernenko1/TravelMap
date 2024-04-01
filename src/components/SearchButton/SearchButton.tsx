import { IoSearch } from 'react-icons/io5'
import styles from './SearchButton.module.css'

export const SearchButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <IoSearch className={styles.icon} size={20} color='white' />
    </button>
  )
}
