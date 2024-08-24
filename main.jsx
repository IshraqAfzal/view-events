import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Container from './container.jsx'
import Title from './title.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title/>
    <Container/>
  </StrictMode>
)
