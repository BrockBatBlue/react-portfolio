import React from "react";
import "../Styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navigationBar navbar navbar-expand navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src="portfolioLogoTwo.png" alt="" />
      </Link>
      <div id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={
                location.pathname === "/about" ? "nav-link active" : "nav-link"
              }
            >
              <img src="logoPortfolioTwo.png" alt="" />
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/contact"
              className={
                location.pathname === "/about" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
