import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/auth_context";
import { useDataContext } from "../context/data_context";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const { target } = useDataContext();

  const onLogout = () => {
    logout();
  };

  const userLinks = (
    <>
      <li className="nav-item">
        <Link to="/home" className="nav-link">
          <h4>Home</h4>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/addmeals" className="nav-link">
          <h4>Add Meals</h4>
        </Link>
      </li>
      <li onClick={onLogout} className="nav-item">
        <Link to="/" className="nav-link">
          <h4>Logout</h4>
        </Link>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          <h4>Login</h4>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          <h4>Register</h4>
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="ms-2">
            <h2>Calories Monitor</h2>
          </div>
          <ul className="navbar-nav mx-auto">
            {user ? (
              <li className="mt-2 ms-4">
                <h4 style={{ color: "#39A2DB" }}>
                  Hello <b style={{ color: "black" }}>{user}</b>, your daily
                  target is{" "}
                  <b style={{ color: "black" }}>
                    {target.length ? target[0].target : null}
                  </b>
                </h4>
              </li>
            ) : null}
          </ul>
          <ul className="navbar-nav ms-auto mx-2">
            {user ? userLinks : guestLinks}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
