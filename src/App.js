import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className='App' >
      <header>
        <NavBar />
        <ItemListContainer greeting='Bienvenidos a TecnoCenter' />
        <ItemCount initial={1} stock={10} />
      </header>
    </div>
  );
}

export default App;
