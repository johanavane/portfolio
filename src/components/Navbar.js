import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import { FcDatabase } from "react-icons/fc";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import "../styles/Navbar.css";

function Navbar({ history }) {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  // State of our button
  const [disabled, setDisabled] = useState(false);

  // useEffect for page changes
  useEffect(() => {
    // Listen for page chnages
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  });

  // Toggle menu
  const handleMenu = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <button disabled={disabled} onClick={handleMenu}>
          {/* <FaIcons.FaBars /> */}
          {/* <FcDatabase /> */}
          {state.menuName}
        </button>
      </div>
      <Hamburger state={state} />
    </header>
  );
}

export default withRouter(Navbar);
