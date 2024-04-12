import { setUserCoords } from '@store/actions/searchSlice'
import { useAppDispatch } from '@store/hooks'

export const useGeolocation = () => {
  const dispatch = useAppDispatch()

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          dispatch(setUserCoords({ lat: latitude, lng: longitude }))
        },
        (error) => {
          console.error('Error getting userLocation', error)
        },
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }
  return { getUserLocation }
}
