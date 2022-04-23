import "./NavBar.css"
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getCategories } from "../../AsyncMock";
import CartWidget from "../CartWidget/cartWidget";
import CarritoContext from "../../CartContext/CartContext";


const NavBar = () => {

  const { ContadorObjetos } = useContext(CarritoContext)

  const [categories, setcategories] = useState([])

  useEffect (()=>{
    
    getCategories().then(categories => {  

      setcategories(categories)
    })
  },[])

    return(
      <nav className="navbar navbar-expand-lg navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to={`/category/Productos`} className="navbar-brand titulo">TecnoCenter</Link>
          <img className="logo" src='./images/tc.png' alt="logo"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex flex-flow justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to='/' className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <Link to={`/category/Productos`} className="dropdown-item" href="">
                      <h6> TODOS LOS PRODUCTOS </h6>
                    </Link>
                  </li>
                  <li>
                  { categories.map(cat => <Link key={cat.Id} to={`/category/${cat.Id}`} className="dropdown-item">{cat.Description}</Link> )}
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">Sobre Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">Locales</Link>
              </li>
            </ul>
            {ContadorObjetos(0) ? <CartWidget /> : null }    
          </div>
        </div>
      </nav>
    )
}

export default NavBar;