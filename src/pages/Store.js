import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Store.scss";
import { StoreImages } from "../components/StoreImages.js";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Store() {
  const slides = StoreImages;
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
    <div className="cs-container">
      <h1>
        Clothing <br />
        Store
      </h1>
      <section className="cs-overview">
        <section className="cs-tech-stack">
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
        <section className="cs-proj-overview">
          <h2>Project Overview</h2>
          <p>
            I developed an online store by utilizing the FakeStore API for data
            retrieval, focusing on the front-end aspect of the project to
            simulate an e-commerce experience.
          </p>
          <h2>Key Achievements</h2>
          <ul>
            <li>
              <p>
                Developed an online store web application containing a landing,
                login, register, and individual product pages with HTML, CSS,
                JavaScript and React.js.
              </p>
            </li>
            <li>
              <p>
                Retrieved product information from the Fake Store API through a
                GET request on women’s, men’s and jewelry categories, for users
                to easily browse products and view individual product pricing,
                descriptions and sizing.
              </p>
            </li>
          </ul>
        </section>
      </section>
      <section className="cs-images cs-slider">
        {StoreImages.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.image} />}
            </div>
          );
        })}
        <section className="cs-arrows">
          <FaArrowLeft class="cs-left-arrow" onClick={prevSlide} />
          <FaArrowRight class="cs-right-arrow" onClick={nextSlide} />
        </section>
      </section>
      <section className="cs-footer">
        <Link to="/boba">Next Project</Link>
        <Link to="/boba">BobaTracker</Link>
      </section>
    </div>
  );
}

export default Store;
