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

export const SEARCH_CATEGORIES: { title: string; value: string; icon: string }[] = [
  {
    icon: Accommodation,
    title: 'Место для сна',
    value: 'accommodation',
  },
  {
    icon: Sport,
    title: 'Спорт',
    value: 'sport',
  },
  {
    icon: Industrial,
    title: 'Индустриальные объекты',
    value: 'airport,power,railway',
  },
  {
    icon: Nature,
    title: 'Природа',
    value: 'natural,national_park',
  },
  {
    icon: Cars,
    title: 'Авто',
    value: 'rental.car',
  },
  {
    icon: Bike,
    title: 'Велосипеды',
    value: 'rental.bicycle',
  },
  {
    icon: Shops,
    title: 'Магазины',
    value:
      'commercial.food_and_drink, commercial.supermarket,commercial.marketplace,commercial.shopping_mall,commercial.discount_store,commercial.kiosk',
  },
  {
    icon: Food,
    title: 'Еда',
    value: 'catering',
  },
  {
    icon: Gas,
    title: 'Заправки',
    value: 'commercial.gas',
  },
  {
    icon: Cafe,
    title: 'Кофе/чай',
    value: 'catering.cafe',
  },
  {
    icon: Banks,
    title: 'Банки',
    value: 'service.financial',
  },
  {
    icon: Entertainment,
    title: 'Развлечения',
    value: `entertainment`,
  },
  {
    icon: Other,
    title: 'Разноe',
    value: 'camping,leisure',
  },
  {
    icon: Architecture,
    title: 'Архитектура',
    value: 'tourism.sights.bridge,tourism.sights.castle',
  },
  {
    icon: Religion,
    title: 'Религия',
    value: 'religion',
  },
  {
    icon: History,
    title: 'История',
    value:
      'building.historic,tourism.sights.memorial,tourism.sights.battlefield,tourism.sights.fort,tourism.sights.ruines',
  },
  {
    icon: Adults,
    title: '18+',
    value: 'commercial.erotic, adult',
  },
  {
    icon: Culture,
    title: 'Культура',
    value: 'entertainment.culture',
  },
]
