import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClickButton from './App.jsx'
import ReactDOM from 'react-dom/client'

createRoot(document.getElementsByTagName('button')).render(
  <StrictMode>
    <App />
    <ClickButton />
  </StrictMode>,
)
