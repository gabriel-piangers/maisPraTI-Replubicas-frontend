import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/index.css"
import { AppRoutes } from './routes/AppRoutes'
import { ModelProvider } from "./model"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModelProvider>
      <AppRoutes />
    </ModelProvider>
  </StrictMode>
)
