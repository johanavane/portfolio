import React from "react";
import { Link } from "react-router-dom";

function Hamburger() {
  return (
    <div className="hamburger-menu">
      <div className="menu-links">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/resume">Experience</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Hamburger;
