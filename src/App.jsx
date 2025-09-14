import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer text="Tu sello, en cada detalle" />
    </>
  )
}
