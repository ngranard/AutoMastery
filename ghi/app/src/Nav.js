import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/manufacturer" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Manufacturer
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><NavLink className="dropdown-item" to="/manufacturer">List Manufacturer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/manufacturer/create">Create Manufacturer</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/vehicle-model" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Vehicle Model
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li><NavLink className="dropdown-item" to="/vehicle-model">List Vehicle Model</NavLink></li>
                <li><NavLink className="dropdown-item" to="/vehicle-model/create">Create Vehicle Model</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/automobile" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Automobile Inventory
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                <li><NavLink className="dropdown-item" to="/automobile">List Automobile Inventory</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobile/create">Create Automobile Inventory</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/create-technician/">New Technician</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav;
