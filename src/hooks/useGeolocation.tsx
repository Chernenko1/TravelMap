import { useEffect, useState } from 'react'

interface IGeolocation {
  lat: number
  lng: number
}

export const useGeolocation = () => {
  const [location, setLocation] = useState<IGeolocation | undefined>(undefined)

  useEffect(() => {
    getUserLocation()
  }, [])

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setLocation({ lat: latitude, lng: longitude })
        },
        (error) => {
          console.error('Error getting userLocation', error)
        },
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }
  return location
}
