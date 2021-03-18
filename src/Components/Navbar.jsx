import React from "react";
import "../Styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navigationBar navbar navbar-expand navbar-light">
      <div className="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/aboutme" className="nav-link">
              <img id="homePage" src="betterELogo.png" alt="" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">
              <img id="portfolioPage" src="lastPortfolio.png" alt="" />
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
          <li className="nextNavLi nav-item">
            <Link to="/" className="nav-link">
              <img id="landing" src="brownHouse.png" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
