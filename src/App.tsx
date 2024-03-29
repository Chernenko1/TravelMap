import { Header } from '@components/Header/Header'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Map } from '@components/Map/Map'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Map />
      <Routes></Routes>
    </BrowserRouter>
  )
}

export default App
