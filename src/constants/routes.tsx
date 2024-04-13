import { Map } from '@components/Map/Map'
import { SideBar } from '@components/SideBar/SideBar'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import { paths } from './paths'
import { SearchMenu } from '@components/SideBar/SidebarPanels/SearchMenu'
import { FavouritesPanel } from '@components/SideBar/SidebarPanels/FavouritePlaces'
import { LoginForm } from '@pages/Login/LoginForm'
import { RegistrationForm } from '@pages/Registration/RegistrationFrom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <SideBar />
        <Outlet />
        <Map />
      </>
    ),
    children: [
      { path: paths.main, element: <></> },
      { path: paths.search, element: <SearchMenu /> },
      { path: paths.favourites, element: <FavouritesPanel /> },
    ],
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '/registration',
    element: <RegistrationForm />,
  },
])
