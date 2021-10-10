import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Hamburger.css";

function Hamburger({ state }) {
  let menu = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // close our menu
      menu.style.display = "none";
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //open menu
      menu.style.display = "block";
    }
  });

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
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
