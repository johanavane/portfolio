import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/Hamburger.scss";
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
                <span>
                  <HashLink smooth to="/#about-me-section">
                    About
                  </HashLink>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/solarpanel">
                    <sup>01</sup>Solar Panel
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/radhair">
                    <sup>02</sup>Rad Hair Art
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/store">
                    <sup>03</sup>Clothing Store
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/boba">
                    <sup>04</sup>Boba Tracker
                  </Link>
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
