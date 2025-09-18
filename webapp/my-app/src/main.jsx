import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
import Hello from './Hello.jsx'
import List from './List.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <List/>
    
  </StrictMode>,
)
