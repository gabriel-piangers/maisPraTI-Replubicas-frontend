import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import "./styles/index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
