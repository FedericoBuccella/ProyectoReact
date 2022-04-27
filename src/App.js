import {React} from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CarritoContextProvider } from './CartContext/CartContext';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <div className='App' >
      <header>
        <CarritoContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<div><h1>Bienvenidos a TecnoCenter</h1></div>}/>
              <Route path='/productos' element={<div><ItemListContainer /></div>}/>
              <Route path='/category/:categoryid' element={<ItemListContainer />} />
              <Route path='/detail/:productid' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} /> 
            </Routes>
          </BrowserRouter>
        </CarritoContextProvider>
      </header>
    </div>
  );
}

export default App;
