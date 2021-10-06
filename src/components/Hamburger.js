import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hamburger.css";

function Hamburger() {
  return (
    <div className="hamburger-menu">
      <div className="menu-layer">
        <div className="menu-links">
          <nav>
            <ul>
              <li>
                <Link to="/" className="home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="about">
                  About
                </Link>
              </li>
              <li>
                <Link to="/resume" className="experience">
                  Experience
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
