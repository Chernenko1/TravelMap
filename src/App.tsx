import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Authentication } from '@components/Authentication/Authentication'
import { MainPage } from '@pages/MainPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
