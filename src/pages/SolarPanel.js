import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="all-container">
      <h1>
        Solar Panel <br />
        Installer
      </h1>
      <section className="all-overview">
        <section className="all-tech-stack">
          <section>
            <h2>Tech Stack</h2>
            <ul>
              <li>
                <allan>React.js</allan>
              </li>
              <li>
                <allan>JavaScript</allan>
              </li>
              <li>
                <allan>SCSS</allan>
              </li>
              <li>
                <allan>HTML</allan>
              </li>
            </ul>
          </section>
          <section className="all-links">
            <a className="web-design" href="https://solartechexpert.com/">
              SolarTechExpert.com
            </a>
          </section>
        </section>
        <section className="all-proj-overview">
          <h2>Key Achievements</h2>
          <ul>
            <li>
              <p>
                Deployed a website for a solar installer certified with Sunrun,
                a 2.3 billion dollar company, ensuring brand alignment and a
                polished interface that streamlines contact and scheduling for
                clients through the use of EmailJS.
              </p>
            </li>
            <li>
              <p>
                Utilized HTML, CSS, JavaScript and React.js to create a single
                page application highlighting the services offered and the
                compelling benefits of adopting solar energy.
              </p>
            </li>
            <li>
              <p>Successfully deployed website using Netlify.</p>
            </li>
          </ul>
        </section>
      </section>
      <section className="all-images all-slider">
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
        <section className="all-arrows">
          <FaArrowLeft class="all-left-arrow" onClick={prevSlide} />
          <FaArrowRight class="all-right-arrow" onClick={nextSlide} />
        </section>
      </section>
      <section className="all-footer">
        <Link to="/radhair">Next Project</Link>
        <Link to="/radhair">RadHairArt</Link>
      </section>
    </div>
  );
}

export default SolarPanel;
