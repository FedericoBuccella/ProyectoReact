import {React} from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Principal from './components/Principal/Principal';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { CarritoContextProvider } from './CartContext/CartContext';
import Cart from './components/Cart/Cart';
import { Formulario } from './components/Formulario/Formulario';

function App() {

  return (
    <div className='App' >
      <header>
        <CarritoContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<Principal />}/>
              <Route path='/productos' element={<div><ItemListContainer /></div>}/>
              <Route path='/category/:categoryid' element={<ItemListContainer />} />
              <Route path='/detail/:productid' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} /> 
              <Route path='/Formulario' element={<Formulario />} /> 

              <Route path='*' element={<Navigate to='/' />} /> 
            </Routes>
            <Footer />
          </BrowserRouter>
        </CarritoContextProvider>
      </header>
     
    </div>
  );
}

export default App;
