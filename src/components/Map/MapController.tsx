import { useAppSelector } from '@store/hooks'
import { LatLngTuple } from 'leaflet'
import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

interface IMapController {
  coords?: Place | LatLngTuple | { lat: number; lng: number }
}

export const MapController = ({ coords }: IMapController) => {
  const userCoords = useAppSelector((state) => state.search.userCoords)

  const map = useMap()
  const flyToDuration = 1.5

  function flyTo(location: LatLngTuple) {
    map.flyTo(location, 15, {
      animate: true,
      duration: flyToDuration,
    })
  }
  function flyToCenter() {
    map.flyTo(userCoords, 15, {
      animate: true,
      duration: flyToDuration,
    })
  }

  useEffect(() => {
    if (coords) {
      flyTo(coords as LatLngTuple)
    } else {
      flyToCenter()
    }
  }, [coords])

  return null
}
