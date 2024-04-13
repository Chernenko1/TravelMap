import '@components/Firebase/index'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from '@constants/routes'

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
