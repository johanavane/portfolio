import React from "react";
import "../styles/Home.scss";
import Pdf from "../pdf/JohanaMartinez_Resume.pdf";
import imageOne from "../images/projectOne.png";
import imageTwo from "../images/projectTwo.png";
import imageThree from "../images/rha-home.png";
import imageFour from "../images/sp-home.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="top-section">
        <div className="gradient-container">
          <section className="visitor-greeting">
            <h1>
              Hello,
              <br /> I'm Johana.
              <br />A front end developer.
            </h1>
          </section>
          <section>
            <h2>Let's connect:</h2>
            <ul className="links">
              <li>
                <a href="mailto:johanamalv@gmail.com">
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a href={Pdf} target="_blank">
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/johana-ma/"
                  target="_blank"
                >
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/johanavane" target="_blank">
                  <span>Github</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>
      <div className="project-gallery">
        <section>
          <h2>Featured Work</h2>
        </section>
        <section>
          <div className="project">
            <img src={imageFour} alt="" />
            <div className="project-text">
              <h3>Solar Panel</h3>
              <div className="project-demo">
                <Link to="/solarpanel">
                  <span>Demo</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="project">
            <img src={imageThree} alt="" />
            <div className="project-text">
              <h3>Rad Hair Art</h3>
              <div className="project-demo">
                <Link to="/radhair">
                  <span>Demo</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="project">
            <img
              src={imageOne}
              alt="online store showing 3 shirts and one backpack"
            />
            <div className="project-text">
              <h3>Clothing Store</h3>
              <div className="project-demo">
                <Link to="/Store">
                  <span>Demo</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="project">
            <img
              src={imageTwo}
              alt="website with a yellow form to save milk tea drinks purchased"
            />
            <div className="project-text">
              <h3>Boba Tracker</h3>
              <div className="project-demo">
                <Link to="/Boba">
                  <span>Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
