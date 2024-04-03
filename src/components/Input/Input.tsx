import { InputHTMLAttributes, useState } from 'react'
import styles from './Input.module.css'
import { IoSearch } from 'react-icons/io5'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...inputRest }: IInput) => {
  const [value, setValue] = useState('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
    if (inputRest.onChange) {
      inputRest.onChange(event)
    }
  }

  return (
    <div className={styles.inputContainer}>
      <IoSearch className={styles.icon} size={20} color='gray' />
      <input className={styles.input} type='text' value={value} onChange={handleInputChange} {...inputRest} />
    </div>
  )
}
