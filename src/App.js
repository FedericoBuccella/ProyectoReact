import {React} from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className='App' >
      <header>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<h1>Bienvenidos a TecnoCenter!</h1>}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} /> 
          </Routes>
          {/* <ItemCount initial={1} stock={10} /> */}
        </BrowserRouter>  
      </header>
    </div>
  );
}

export default App;
