import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/style.css'
import App from './App.jsx'
import Page from './components/page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page/>
  </StrictMode>,
)
