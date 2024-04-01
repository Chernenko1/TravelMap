import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Map } from '@components/Map/Map'
import { SideBar } from '@components/SideBar/SideBar'

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <SideBar />
        <Map />
      </div>
      <Routes></Routes>
    </BrowserRouter>
  )
}

export default App
