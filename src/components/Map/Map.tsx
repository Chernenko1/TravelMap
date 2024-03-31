import styles from './Map.module.css'
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L, { Icon } from 'leaflet'
import { useGeolocation } from '../../hooks/useGeolocation'
import { getPlaces } from '@utils/getPlaces'
import { useEffect, useState } from 'react'
import { MarkerDescription } from './MarkerDescription/MarkerDescription'
import { SideBar } from '@components/SideBar/SideBar'

export const Map = () => {
  const [features, setFeatures] = useState<Feature[] | undefined>(undefined)
  const coords = useGeolocation()

  console.log(coords)

  async function searchPlaces() {
    let response = await getPlaces(coords?.lat as number, coords?.lng as number, 1000)
    setFeatures(response)
  }

  useEffect(() => {
    searchPlaces()
  }, [coords])

  if (coords) {
    return (
      <MapContainer zoomControl={false} center={coords} zoom={13} style={{ height: '98vh', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Circle center={coords} radius={1000} />
        <Marker position={coords}>
          <Popup>Жопа</Popup>
        </Marker>
        {features &&
          features.map((item) => (
            <Marker position={{ lat: item.geometry.coordinates[1], lng: item.geometry.coordinates[0] }}>
              <Popup>
                <MarkerDescription
                  name={item.properties.name}
                  address_line={item.properties.address_line2}
                  distance={item.properties.distance}
                />
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    )
  }
}

{
  /* <PlacesOfInterest places={features?.map((item) => item.properties) as Properties[]} /> */
}
