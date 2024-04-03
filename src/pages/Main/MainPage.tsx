import { Map } from '@components/Map/Map'
import { SideBar } from '@components/SideBar/SideBar'

export const MainPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <Map />
    </div>
  )
}
