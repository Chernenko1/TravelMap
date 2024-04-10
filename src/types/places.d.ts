interface GeoapifyResponse {
  type: string
  features: Feature[]
}

interface Feature {
  type: string
  properties: Properties
  geometry: Geometry
}

interface Properties {
  name: string
  distance: number
  categories: string[]
  address_line2: string
  lon: number
  lat: number
  place_id: string
}

interface Geometry {
  type: string
  coordinates: number[]
}

interface Place {
  name: string
  address: string
  coords: {
    lon: number
    lat: number
  }
  placeId: string
}
