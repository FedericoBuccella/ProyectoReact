import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';

function App() {
  return (
    <div className='App' >
      <header>
        <NavBar />
        <ItemListContainer greeting='Bienvenidos a TecnoCenter' />
      </header>
    </div>
  );
}

export default App;
