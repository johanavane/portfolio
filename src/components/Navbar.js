import React from "react";
import * as FaIcons from "react-icons/fa";
import { FcDatabase } from "react-icons/fc";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="navbar">
            <button>
              {/* <FaIcons.FaBars /> */}
              <FcDatabase />
            </button>
          </div>
        </div>
      </div>
      <Hamburger />
    </header>
  );
}

export default Navbar;
