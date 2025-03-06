import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "@fontsource/hedvig-letters-sans"; // Defaults to 400 weight



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)