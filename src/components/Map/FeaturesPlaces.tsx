import unNamed from '@assets/svg/unNamed.svg'
import { mapIcon } from '@components/MapIcons/Icons'
import { Marker, Popup } from 'react-leaflet'
import { MarkerDescription } from './MarkerDescription/MarkerDescription'

import { categories } from '@constants/categories'

interface IFeaturesPlaces {
  features: Feature[]
}

export const FeaturesPlaces = ({ features }: IFeaturesPlaces) => {
  function setIcon(arr: string[]) {
    let icon = categories.filter((item) => {
      let values = item.value.split(',')
      return values.some((value) => {
        if (arr.includes(value)) {
          return value
        }
      })
    })

    return icon.length ? mapIcon(icon[0].icon) : mapIcon(unNamed)
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
