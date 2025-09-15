import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
function NotFound() {
  return <div className="container py-4">404 — Página no encontrada</div>
}
export default function App() {
  const [cartCount, setCartCount] = useState(0)
  return (
    <>
      <NavBar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<ItemListContainer text="Tu sello, en cada detalle" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer text="Elegí hoy lo que te define." />} />
        <Route
          path="/item/:id"
          element={
            <ItemDetailContainer
              onAdd={(qty) => setCartCount((c) => c + qty)}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
