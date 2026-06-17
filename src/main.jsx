// main.jsx - Punto de entrada de la aplicación
// Aquí se monta el componente App en el DOM y se importan los estilos globales
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'

// Montamos la app dentro de StrictMode para detectar problemas en desarrollo
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
