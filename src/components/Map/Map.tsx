import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import styles from './Map.module.css'
import { useState } from 'react'
import { MapHeader } from './MapHeader/MapHeader'

export const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  })

  const [map, setMap] = useState<google.maps.Map | null>(null)

  const center = {
    lat: 53.675284,
    lng: 23.829562,
  }

  return (
    <article className={styles.map}>
      {isLoaded && (
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ flexGrow: 1 }}
          options={{ mapTypeControl: false, streetViewControl: false }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
      <MapHeader />
    </article>
  )
}
