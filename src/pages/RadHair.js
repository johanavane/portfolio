import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/RadHair.scss";
import { RadHairImages } from "../components/RadHairImages.js";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function RadHair() {
  const slides = RadHairImages;
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
    <div className="rha-container">
      <h1>
        Rad Hair <br />
        Art
      </h1>
      <section className="rha-overview">
        <section className="rha-tech-stack">
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
          <section className="rha-links">
            <a className="web-design" href="https://www.radhairart.com/">
              RadHairArt.com
            </a>
          </section>
        </section>
        <section className="rha-proj-overview">
          <h2>Project Overview</h2>
          <p>
            A website designed for a small business hairstylist, offering
            clients a glimpse of their past work, convenient appointment
            scheduling, pricing details, services offered, and easy contact
            options.
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
      <section className="rha-images rha-slider">
        {RadHairImages.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.image} />}
            </div>
          );
        })}
        <section className="rha-arrows">
          <FaArrowLeft class="rha-left-arrow" onClick={prevSlide} />
          <FaArrowRight class="rha-right-arrow" onClick={nextSlide} />
        </section>
      </section>
      <section className="rha-footer">
        <Link to="/store">Next Project</Link>
        <Link to="/store">ClothingStore</Link>
      </section>
    </div>
  );
}

export default RadHair;
