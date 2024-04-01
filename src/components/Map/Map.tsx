import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { getPlaces } from '@utils/getPlaces'
import { useEffect, useState } from 'react'
import { MarkerDescription } from './MarkerDescription/MarkerDescription'
import { useAppSelector } from '@store/hooks'

export const Map = () => {
  const [features, setFeatures] = useState<Feature[] | undefined>(undefined)
  const { userCoords, radius, searchPlaces } = useAppSelector((state) => state.search)

  async function searchPlace() {
    let response = await getPlaces(userCoords?.lat as number, userCoords?.lng as number, +radius, searchPlaces)
    setFeatures(response)
  }

  useEffect(() => {
    searchPlace()
  }, [userCoords, radius, searchPlaces])

  if (userCoords) {
    return (
      <MapContainer zoomControl={false} center={userCoords} zoom={13} style={{ height: '98vh', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Circle center={userCoords} radius={+radius} />
        <Marker position={userCoords}>
          <Popup>Жопа</Popup>
        </Marker>
        {features &&
          features.map((item, ind) => (
            <Marker position={{ lat: item.geometry.coordinates[1], lng: item.geometry.coordinates[0] }} key={ind}>
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
