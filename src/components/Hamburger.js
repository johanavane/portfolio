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
        // following makes page come in sideways
        // instead of top to bottom
        // transformOrigin: "right top",
        // skewY: 2,
        ease: "power3.inOut",
        stagger: {
          amount: 0.1,
        },
      });
    }
  }, [state]);

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div className="menu-links">
          {/* nav tag used for navigation links */}
          <nav>
            <ul>
              <li>
                <span>
                  <Link to="/">Home</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/about">About</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/boba">Work</Link>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
