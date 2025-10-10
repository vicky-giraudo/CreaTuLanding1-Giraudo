import NavBarContainer from './components/NavBarContainer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
    return (
      <>
        <NavBarContainer />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/checkout' element={<Checkout />} /> 
        </Routes>
        <Toaster />
      </>
    )
  }
export default App
