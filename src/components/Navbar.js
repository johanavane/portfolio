import React from "react";
import * as FaIcons from "react-icons/fa";
// import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        {/* <Link to="#" className="menu-bars"></Link> */}
        <button>
          <FaIcons.FaBars />
        </button>
      </div>
      <Hamburger />
    </div>
  );
}

export default Navbar;
