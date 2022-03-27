import './App.css';
import NavBar from './components/Navbar/NavBar';
import logo from './LogoTC.png'

function App() {
  return (
    <div className='App' >
      <header>
        <img src={logo} className="logoPrinci"></img>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
