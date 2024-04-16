import L from 'leaflet'
import { createControlComponent } from '@react-leaflet/core'
import 'leaflet-routing-machine'

const createRoutingMachineLayer = (props: any) => {
  const instance = L.Routing.control({
    waypoints: props.way.map((wp: { lat: number; lng: number }) => L.latLng(wp.lat, wp.lng)),
    //@ts-ignore
    lineOptions: {
      styles: [{ color: 'red' }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  })
  return instance
}

const RoutingMachine = createControlComponent(createRoutingMachineLayer)

export default RoutingMachine
