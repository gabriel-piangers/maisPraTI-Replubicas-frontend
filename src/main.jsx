import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/index.css"
import { Toaster } from "react-hot-toast";
import { AppRoutes } from './routes/AppRoutes'
import { ModelProvider } from "./model"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModelProvider>
      <AppRoutes />
   <Toaster />
    </ModelProvider>
  </StrictMode>
)
