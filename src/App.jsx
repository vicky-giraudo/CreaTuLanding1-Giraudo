import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import NavBar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <ItemListContainer text="Iluminamos tus espacios" />
      </main>
    </>
  );
}

export default App;
