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
  extent: number[]
  country: string
  state: string
  city: string
  postcode: string
  district: string
  street: string
  housenumber: string
  address_line2: string
  datasource: {
    raw: {
      name: string
      landuse: string
      natural: string
    }
  }
  place_id: string
}

interface Geometry {
  type: string
  coordinates: number[]
}
