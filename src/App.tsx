import '@components/Firebase/index'
import { LoginForm } from '@pages/Login/LoginForm'
import { MainPage } from '@pages/Main/MainPage'
import { RegistrationForm } from '@pages/Registration/RegistrationFrom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginForm message='Вход' />} />
        <Route path='/registration' element={<RegistrationForm message='Регистрация' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
