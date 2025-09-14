// 1) CSS de Bootstrap primero (para que tus estilos puedan sobrescribir)
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

// 2) React + App
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// 3) Montar la app en #root
createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <App />
</React.StrictMode>
)
