import React from 'react'
import ReactDOM from 'react-dom/client'
import './fonts/Mont/Mont-Regular.ttf'
import App from './App.tsx'
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
