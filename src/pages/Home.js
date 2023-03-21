import React from "react";
import "../styles/Home.css";
import Pdf from "../pdf/JohanaMartinez_Resume.pdf";
import imageOne from "../images/projectOne.png";
import imageTwo from "../images/projectTwo.png";
import imageThree from "../images/projectThree.png";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
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

        {/* featured projects section */}
        <div className="home-projects">
          <section>
            <h2>Featured Projects</h2>
          </section>
          <section>
            <div className="project-one">
              <img src={imageOne} />
              <div className="proj-one-text">
                <h3>Clothing Store</h3>
                <div className="git-demo">
                  <a
                    href="https://github.com/johanavane/online-store"
                    target="_blank"
                  >
                    <span>Github</span>
                  </a>
                  <Link to="/Store">
                    <span>Demo</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-two">
              <img src={imageTwo} />
              <div className="proj-two-text">
                <h3>Boba Tracker</h3>
                <div className="git-demo">
                  <Link to="/Boba">
                    <span>Demo</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-three">
              <img src={imageThree} />
              <div className="proj-three-text">
                <h3>Dark Mode</h3>
                <div className="git-demo">
                  <Link to="/DarkMode">
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
}

export default Home;
