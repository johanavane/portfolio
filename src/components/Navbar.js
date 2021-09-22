import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import "../Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="navbar">
              <button>
                <FaIcons.FaBars />
              </button>
            </div>
            {/* <Hamburger /> */}
          </div>
        </div>
      </div>
      <Hamburger />
    </header>
  );
}

export default Navbar;
