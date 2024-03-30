import axios from 'axios'

export async function getPlaces(lat: number, lng: number, radius: number) {
  try {
    const { data }: { data: GeoapifyResponse } = await axios.get(
      `https://api.geoapify.com/v2/places?categories=commercial&filter=circle:${lng},${lat},${radius}&bias=proximity:${lng},${lat}&limit=20&apiKey=${import.meta.env.VITE_GEO_API_KEY}`,
    )

    return data.features
  } catch (error) {
    console.log('GeoAPIERR: ', error)
  }
}
