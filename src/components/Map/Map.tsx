import { Circle, MapContainer, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { getPlaces } from '@utils/getPlaces'
import { useEffect, useState } from 'react'
import styles from './Map.module.css'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { LocationButton } from '@components/LocationButton/LocationButton'
import { MapController } from './MapController'
import { FeaturesPlaces } from './FeaturesPlaces'
import { setFoundPlaces } from '@store/actions/searchSlice'

export const Map = () => {
  const { userCoords, radius, searchPlaces, coordsToMove, places } = useAppSelector((state) => state.search)

  const dispatch = useAppDispatch()

  async function searchPlace() {
    let response = await getPlaces(userCoords?.lat as number, userCoords?.lng as number, +radius, searchPlaces)
    dispatch(setFoundPlaces(response))
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
          {places && <FeaturesPlaces features={places} />}
          <MapController coords={coordsToMove} />
          <div className={styles.locationButtons}>
            <LocationButton />
          </div>
        </MapContainer>
      </div>
    )
  }
}
