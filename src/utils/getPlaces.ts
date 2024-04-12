import { env } from '@constants/index'
import axios from 'axios'

const LIMIT = 500

export async function getPlaces(lat: number, lng: number, radius: number, categories: string[]) {
  const sCategories = categories.join(',')
  try {
    const { data }: { data: GeoapifyResponse } = await axios.get(
      `https://api.geoapify.com/v2/places?categories=${sCategories}&filter=circle:${lng},${lat},${radius}&bias=proximity:${lng},${lat}&limit=${LIMIT}&apiKey=${env.VITE_GEO_API_KEY}`,
    )

    return data.features
  } catch (error) {
    console.log('GeoAPIERR: ', error)
  }
}
