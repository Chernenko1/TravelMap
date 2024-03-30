import styles from './Map.module.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { MapHeader } from './MapHeader/MapHeader'
import 'leaflet/dist/leaflet.css'

const center = {
  lat: 53.675284,
  lng: 23.829562,
}

export const Map = () => {
  return (
    <article className={styles.map}>
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '90vh', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={center}>
          <Popup>Жопа</Popup>
        </Marker>
      </MapContainer>
      <MapHeader />
    </article>
  )
}
