import { Icon } from 'leaflet'
import Accommodation from '@assets/svg/accommodation.svg'
import Sport from '@assets/svg/sport.svg'
import Industrial from '@assets/svg/industrial.svg'
import Nature from '@assets/svg/nature.svg'
import Cars from '@assets/svg/cars.svg'
import Bike from '@assets/svg/bike.svg'
import Shops from '@assets/svg/shops.svg'
import Food from '@assets/svg/food.svg'
import Gas from '@assets/svg/gas.svg'
import Cafe from '@assets/svg/cafe.svg'
import Banks from '@assets/svg/cafe.svg'
import Entertainment from '@assets/svg/entertainment.svg'
import Other from '@assets/svg/other.svg'
import Architecture from '@assets/svg/architecture.svg'
import Religion from '@assets/svg/religion.svg'
import History from '@assets/svg/history.svg'
import Adults from '@assets/svg/18+.svg'
import Culture from '@assets/svg/culture.svg'

const entertainment = new Icon({
  iconUrl: Entertainment,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const gas = new Icon({
  iconUrl: Gas,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const shop = new Icon({
  iconUrl: Shops,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const religion = new Icon({
  iconUrl: Religion,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const accommodation = new Icon({
  iconUrl: Accommodation,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const architecture = new Icon({
  iconUrl: Architecture,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const history = new Icon({
  iconUrl: History,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const sport = new Icon({
  iconUrl: Sport,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const industrial = new Icon({
  iconUrl: Industrial,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const nature = new Icon({
  iconUrl: Nature,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const cars = new Icon({
  iconUrl: Cars,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const bike = new Icon({
  iconUrl: Bike,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const food = new Icon({
  iconUrl: Food,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const cafe = new Icon({
  iconUrl: Cafe,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const bank = new Icon({
  iconUrl: Banks,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const other = new Icon({
  iconUrl: Other,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const adult = new Icon({
  iconUrl: Adults,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

const culture = new Icon({
  iconUrl: Culture,
  iconSize: [35, 35],
  iconAnchor: undefined,
  popupAnchor: [-3, -76],
})

export const MapIcon = [
  {
    icon: entertainment,
    value: `entertainment.zoo,entertainment.aquarium,entertainment.planetarium,entertainment.cinema,entertainment.escape_game,entertainment.miniature_golf,entertainment.bowling_alley,flying_fox,entertainment.water_park,entertainment.theme_park`,
  },
  {
    icon: gas,
    value: 'commercial.gas',
  },
  {
    icon: shop,
    value:
      'commercial.food_and_drink, commercial.supermarket,commercial.marketplace,commercial.shopping_mall,commercial.discount_store,commercial.kiosk',
  },
  {
    icon: religion,
    value: 'tourism.sights.place_of_worship,tourism.sights.monastery,religion',
  },
  {
    icon: accommodation,
    value: 'accommodation',
  },
  {
    icon: architecture,
    value: 'tourism.sights.bridge,tourism.sights.castle',
  },
  {
    icon: history,
    value:
      'building.historic,tourism.sights.memorial,tourism.sights.battlefield,tourism.sights.fort,tourism.sights.ruines',
  },
  {
    icon: sport,
    value:
      'activity,entertainment.activity_park.climbing,entertainment.activity_park.trampoline,entertainment.activity_park, building.sport,sport',
  },
  {
    icon: industrial,
    value: 'airport,power,railway',
  },
  {
    icon: culture,
    value: 'entertainment.culture',
  },
  {
    icon: adult,
    value: 'commercial.erotic, adult',
  },
  {
    icon: other,
    value: 'camping,leisure',
  },
  {
    icon: bank,
    value: 'service.financial',
  },
  {
    icon: cafe,
    value: 'catering.cafe',
  },
  {
    icon: food,
    value: 'catering',
  },
  {
    icon: cars,
    value: 'rental.car',
  },
  {
    icon: nature,
    value: 'natural,national_park',
  },
  {
    icon: bike,
    value: 'rental.bicycle',
  },
]
