import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';

function App() {

  return (

    <div className='App' >
      <header>
        <NavBar />
        <ItemDetailsContainer />
        <ItemCount initial={1} stock={10} />
        
      </header>
    </div>
  );
}

export default App;
