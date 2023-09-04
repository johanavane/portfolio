import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SolarPanel.scss";
import { SolarImages } from "../components/SolarImages";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function SolarPanel() {
  const slides = SolarImages;
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="sp-container">
      <h1>
        Solar Panel <br />
        Installer
      </h1>
      <section className="sp-overview">
        <section className="sp-tech-stack">
          <section>
            <h2>Tech Stack</h2>
            <ul>
              <li>
                <span>React.js</span>
              </li>
              <li>
                <span>JavaScript</span>
              </li>
              <li>
                <span>SCSS</span>
              </li>
              <li>
                <span>HTML</span>
              </li>
            </ul>
          </section>
          <section className="sp-links">
            <a className="web-design" href="https://solartechexpert.com/">
              SolarTechExpert.com
            </a>
          </section>
        </section>
        <section className="sp-proj-overview">
          <h2>Project Overview</h2>
          <p>
            Developed a website for a solar tech installer affiliated with
            Sunrun, a renowned leader in the residential solar installation
            industry. The website highlights the services offered, the
            compelling benefits of adopting solar energy, and a user-friendly
            contact form for scheduling consultations.
          </p>
          <h2>Key Achievements</h2>
          <ul>
            <li>
              <p>one</p>
            </li>
            <li>
              <p>two</p>
            </li>
            <li>
              <p>three</p>
            </li>
          </ul>
        </section>
      </section>
      <section className="sp-images sp-slider">
        {SolarImages.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.image} />}
            </div>
          );
        })}
        <section className="sp-arrows">
          <FaArrowLeft class="sp-left-arrow" onClick={prevSlide} />
          <FaArrowRight class="sp-right-arrow" onClick={nextSlide} />
        </section>
      </section>
      <section className="sp-footer">
        <Link to="/radhair">Next Project</Link>
        <Link to="/radhair">RadHairArt</Link>
      </section>
    </div>
  );
}

export default SolarPanel;
