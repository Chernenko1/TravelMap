import { Marker, Popup } from 'react-leaflet'
import { MarkerDescription } from './MarkerDescription/MarkerDescription'
import { MapIcon } from '@components/MapIcons/Icons'

interface IFeaturesPlaces {
  features: Feature[]
}

export const FeaturesPlaces = ({ features }: IFeaturesPlaces) => {
  function setIcon(arr: string[]) {
    for (var i = 0; i < MapIcon.length; i++) {
      let strArr = MapIcon[i].value.split(',')
      if (strArr.some((item) => arr.includes(item))) {
        return MapIcon[i].icon
      }
    }
    return MapIcon.at(-1)?.icon
  }

  return (
    <div>
      {features.map(({ properties }, ind) => {
        let icon = setIcon(properties.categories)
        return (
          <Marker position={{ lat: properties.lat, lng: properties.lon }} icon={icon} key={ind}>
            <Popup>
              <MarkerDescription
                place={{
                  name: properties.name || 'Название неизвестно',
                  address: properties.address_line2,
                  coords: { lon: properties.lon, lat: properties.lat },
                  placeId: properties.place_id,
                }}
              />
            </Popup>
          </Marker>
        )
      })}
    </div>
  )
}
