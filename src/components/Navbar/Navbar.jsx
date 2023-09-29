import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
        <div className="container">
          <Link to="/" className="fs-3 navbar-brand">
            Rick & Morty <span className="text-primary">Wiki</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <div className="navbar-nav fs-5">
              <NavLink to="/" className="nav-link">
                Characters
              </NavLink>
              <NavLink to="/Episodes" className="nav-link">
                Episodes
              </NavLink>
              <NavLink to="/Location" className="nav-link">
                Location
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
