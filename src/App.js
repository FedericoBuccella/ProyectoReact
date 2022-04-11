import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='App' >
      <header>
        <NavBar />
        <ItemListContainer greeting='Bienvenidos a TecnoCenter' />
        <ItemDetailContainer />
        <ItemCount initial={1} stock={10} />
      </header>
    </div>
  );
}

export default App;
