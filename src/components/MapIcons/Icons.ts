import { Icon } from 'leaflet'

export const mapIcon = (icon: string) =>
  new Icon({
    iconUrl: icon,
    iconSize: [35, 35],
    iconAnchor: undefined,
    popupAnchor: [0, -20],
  })
