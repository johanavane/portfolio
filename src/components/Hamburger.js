import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Hamburger.css";
import gsap from "gsap";

function Hamburger({ state }) {
  // vars for animated dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // close our menu
      gsap.to(revealMenu, {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //open menu
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.to(revealMenu, {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      gsap.from(revealMenu, {
        duration: 0.8,
        height: 0,
        transformOrigin: "right top",
        skewY: 2,
        ease: "power3.inOut",
        stagger: {
          amount: 0.1,
        },
      });
    }
  }, [state]);

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
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
