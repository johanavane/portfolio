import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import "../styles/Navbar.css";

function Navbar({ history }) {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "MENU",
    menuHome: "",
  });

  // State of our button
  const [disabled, setDisabled] = useState(false);

  // useEffect for page changes
  useEffect(() => {
    // Listen for page chnages
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu", menuHome: "" });
    });
  });

  // Toggle menu
  const handleMenu = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Exit",
        menuHome: "Home",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
        menuHome: "",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Exit",
        menuHome: "Home",
      });
    }
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">{state.menuHome}</Link>
        </div>
        <div className="navMenu">
          <button disabled={disabled} onClick={handleMenu}>
            {state.menuName}
          </button>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
}

export default withRouter(Navbar);
