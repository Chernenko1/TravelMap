import styles from './Map.module.css'
import { MutableRefObject, useRef, useState } from 'react'
import { MapHeader } from './MapHeader/MapHeader'

const center = {
  lat: 53.675284,
  lng: 23.829562,
}

export const Map = () => {
  return (
    <article className={styles.map}>
      <MapHeader />
    </article>
  )
}
