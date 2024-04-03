import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Authentication } from '@components/Authentication/Authentication'
import { MainPage } from '@pages/MainPage'
import '@components/Firebase/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Authentication />} />
        <Route path='/auth' element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
