import "./NavBar.css"
import CartWidget from "../CartWidget/cartWidget"

const NavBar = () => {

    return(
      <nav className="navbar navbar-expand-lg navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand titulo" href="#">TecnoCenter</a>
          <img className="logo" src='./images/tc.png'/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex flex-flow justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Teclados</a></li>
                  <li><a className="dropdown-item" href="#">Auriculares</a></li>
                  <li><a className="dropdown-item" href="#">Mouse</a></li>
                  <li><a className="dropdown-item" href="#">Accesorios</a></li>
                  <li><a className="dropdown-item" href="#">Almacenamiento</a></li>
                  <li><a className="dropdown-item" href="#">Notebook</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sobre Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Locales</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
    )
}

export default NavBar;