import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreContextProvider from './context/Storcontext.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <StoreContextProvider>
   <App />
  </StoreContextProvider>
   
 </BrowserRouter>
    
 
)
