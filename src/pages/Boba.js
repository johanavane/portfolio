import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BobaImages } from "../components/BobaImages.js";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Boba() {
  const slides = BobaImages;
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
    <div className="projects-container">
      {/* <h1>
        Boba <br />
        Tracker
      </h1> */}
      <h1>Boba Tracker</h1>
      <section className="projects-info">
        <section className="projects-tech-stack">
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
                <span>CSS</span>
              </li>
              <li>
                <span>HTML</span>
              </li>
            </ul>
          </section>
        </section>
        <section className="projects-about">
          <h2>Project Overview</h2>
          <p>
            Boba Tracker is a web app enabling users to monitor their weekly
            Milk Tea expenses and sugar consumption. By recording drink
            purchases, the app generates weekly spending and sugar intake
            charts, offering the flexibility to edit or delete entries.
          </p>
          <h2>Key Achievements</h2>
          <ul>
            <li>
              <p>
                Led a five-person team using Scrum methodology to build a full
                stack web application where users can track weekly milk tea
                purchases and minimize spending.
              </p>
            </li>
            <li>
              <p>
                Prototyped and redesigned the UI using Figma, to create a more
                fun and visually colorful experience for users.
              </p>
            </li>
            <li>
              <p>
                Built an entry form with HTML, Tailwind CSS, JavaScript, and
                React.js where users can save drinks to an existing database by
                performing a POST request.
              </p>
            </li>
          </ul>
        </section>
      </section>
      <section className="projects-images projects-slider">
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.image} alt={slide.alt} />}
            </div>
          );
        })}
        <section className="projects-arrows">
          <FaArrowLeft class="projects-left-arrow" onClick={prevSlide} />
          <FaArrowRight class="projects-right-arrow" onClick={nextSlide} />
        </section>
      </section>
      <section className="projects-footer">
        <Link to="/solarpanel">Next Project</Link>
        <Link to="/solarpanel">Solar Panel</Link>
      </section>
    </div>
  );
}

export default Boba;
