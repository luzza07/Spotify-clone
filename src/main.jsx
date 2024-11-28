import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{BrowserRouter} from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
    <PlayerContextProvider>
    <App />

    </PlayerContextProvider>
    
    </BrowserRouter>
    
  </React.StrictMode>,
)
