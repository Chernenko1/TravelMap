import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { getPlaces } from '@utils/getPlaces'
import { useEffect, useState } from 'react'
import { MarkerDescription } from './MarkerDescription/MarkerDescription'
import { useAppSelector } from '@store/hooks'
import { MapIcon } from '@components/MapIcons/Icons'

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

  function setIcon(arr: string[]) {
    for (var i = 0; i < MapIcon.length; i++) {
      let strArr = MapIcon[i].value.split(',')
      if (strArr.some((item) => arr.includes(item))) {
        return MapIcon[i].icon
      }
    }
    return MapIcon.at(-1)?.icon
  }

  if (userCoords) {
    return (
      <MapContainer zoomControl={false} center={userCoords} zoom={13} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Circle center={userCoords} radius={+radius} />
        <Marker position={userCoords}>
          <Popup>Жопа</Popup>
        </Marker>
        {features &&
          features.map((item, ind) => {
            let icon = setIcon(item.properties.categories)
            return (
              <Marker
                position={{ lat: item.geometry.coordinates[1], lng: item.geometry.coordinates[0] }}
                icon={icon}
                key={ind}
              >
                <Popup>
                  <MarkerDescription
                    name={item.properties.name || 'Нет названия'}
                    address_line={item.properties.address_line2}
                    distance={item.properties.distance}
                    id={item.properties.place_id}
                  />
                </Popup>
              </Marker>
            )
          })}
      </MapContainer>
    )
  }
}

{
  /* <PlacesOfInterest places={features?.map((item) => item.properties) as Properties[]} /> */
}
