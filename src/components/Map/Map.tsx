import { Circle, MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { getPlaces } from '@utils/getPlaces'
import { useEffect, useState } from 'react'
import styles from './Map.module.css'
import { useAppSelector } from '@store/hooks'
import { LocationButton } from '@components/LocationButton/LocationButton'
import { MapController } from './MapController'
import { FeaturesPlaces } from './FeaturesPlaces'

export const Map = () => {
  const { userCoords, radius, searchPlaces } = useAppSelector((state) => state.search)

  const [features, setFeatures] = useState<Feature[] | undefined>(undefined)

  async function searchPlace() {
    let response = await getPlaces(userCoords?.lat as number, userCoords?.lng as number, +radius, searchPlaces)
    setFeatures(response)
  }

  useEffect(() => {
    searchPlace()
  }, [userCoords, radius, searchPlaces])

  if (userCoords) {
    return (
      <div className={styles.map}>
        <MapContainer
          zoomControl={false}
          center={userCoords}
          zoom={13}
          style={{ height: '100vh', width: '100%', zIndex: 1 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Circle center={userCoords} radius={+radius} />
          <Marker position={userCoords} />
          {features && <FeaturesPlaces features={features} />}
          <MapController />
        </MapContainer>
        <div className={styles.locationButtons}>
          <LocationButton />
        </div>
      </div>
    )
  }
}
