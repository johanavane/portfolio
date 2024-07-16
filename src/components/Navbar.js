import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import "../styles/Navbar.scss";

function Navbar({ history }) {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "MENU",
    menuHome: "HOME",
  });

  // useEffect for page changes
  useEffect(() => {
    // Listen for page chnages
    history.listen(() => {
      setState({ clicked: false, menuName: "MENU", menuHome: "HOME" });
    });
  });

  // Toggle menu
  const handleMenu = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "EXIT",
        menuHome: "HOME",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "MENU",
        menuHome: "HOME",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "EXIT",
        menuHome: "HOME",
      });
    }
  };

  return (
    <header>
      <div className="container">
        <div
          className={`navHome ${state.clicked ? "white-text" : "black-text"}`}
        >
          <Link to="/">{state.menuHome}</Link>
        </div>
        <div className="navMenu">
          <button
            onClick={handleMenu}
            className={state.clicked ? "white-text" : "black-text"}
          >
            {state.menuName}
          </button>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
}

export default withRouter(Navbar);
