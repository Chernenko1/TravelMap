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
  osm_type: string
  osm_id: string
  extent: number[]
  country: string
  state: string
  city: string
  postcode: string
  district: string
  street: string
  housenumber: string
  address_line2: string
}

interface Geometry {
  type: string
  coordinates: number[]
}
