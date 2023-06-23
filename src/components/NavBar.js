import React, { useMemo } from "react";
import { useAuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

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
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/stocks" >My Stocks</Link>
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
  const { currentUser } = useAuthContext();

  const username = useMemo(() => {
    return currentUser?.displayName || "Profile"
  }, [currentUser]);

  const avatar = useMemo(() => {
    return (
      currentUser
      ? <img
          className="avatar"
          src={currentUser.photoURL}
          alt={currentUser.displayName}
          width="34"
          height="34"
        />
      : "Login"
    )
  }, [currentUser]);


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
          { avatar }
        </a>
        <ul
          className="dropdown-menu"
          aria-labelledby="navbarDropdown"
          style={{ marginLeft: "-95px" }}
        >
          <li>
            <a className="dropdown-item text-center" href='#'>
              { username }
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
        <a className="navbar-brand" href="#">Gallery</a>
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