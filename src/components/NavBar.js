import React from "react"
import { useAuthContext } from "../context/authContext";

const LogIn = () => {
  const { login, currentUser } = useAuthContext();

  return (
    !currentUser &&
    <button className="btn btn-warning" onClick={login}>
      Login
    </button>
  )
};

const LogOut = () => {
  const { logout, currentUser } = useAuthContext();

  return (
    currentUser &&
    <button className="btn btn-warning" onClick={logout}>
      LogOut
    </button>
  )
};

function Navigation() {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
  )
}

function Search() {
  return (
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  )
}

function DropDown() {
  return (
    <ul className="navbar nav mb-2 mb-lg-0">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href='#'
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Login
        </a>
        <ul 
          className="dropdown-menu"
          aria-labelledby="navbarDropdown"
          style={{ marginLeft: "-95px" }}
        >
          <li>
            <a className="dropdown-item text-center" href='#'>
              Profile
            </a>
          </li>
          <hr/>
          <li className="dropdown-item text-center">
            <LogIn />
            <LogOut />
          </li>
        </ul>
      </li>
    </ul>
  )
}

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Navigation />
          <Search />
          <DropDown />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;