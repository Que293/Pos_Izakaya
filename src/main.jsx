import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { POSProvider } from './contexts/POSContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <POSProvider>
        <App />
      </POSProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

