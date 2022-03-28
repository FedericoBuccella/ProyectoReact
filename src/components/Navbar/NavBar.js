import "./NavBar.css"

const NavBar = () => {

    return(
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">TecnoCenter</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex flex-flow justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Teclados</a></li>
                  <li><a class="dropdown-item" href="#">Auriculares</a></li>
                  <li><a class="dropdown-item" href="#">Mouse</a></li>
                  <li><a class="dropdown-item" href="#">Accesorios</a></li>
                  <li><a class="dropdown-item" href="#">Almacenamiento</a></li>
                  <li><a class="dropdown-item" href="#">Notebook</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sobre Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Locales</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;