import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Boba.css";
import { BobaImages } from "../components/BobaImages.js";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

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
    <div class="boba-container">
      <div class="boba-layer">
        <div class="boba-title">
          <p class="one">Boba </p>
          <p class="two">Tracker</p>
        </div>
        <div class="boba-columns-container">
          <div class="boba-column-language">
            <div class="vane">
              <p>Languages</p>
              <ul class="boba-language">
                <li>HTML</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div class="vane">
              <p>Library</p>
              <ul class="boba-language">
                <li>React.js</li>
              </ul>
            </div>
          </div>
          <div class="boba-column-about">
            <div class="boba-description">
              <p>Project Details</p>
            </div>
            <p>
              This is a project I took part in during the course of
              ‘Introduction to Software Engineering’ at UC Santa Cruz. Boba
              Tracker is a web application that allows users to track their
              weekly Milk Tea spending and their average sugar intake. After
              entering drink purchases, a chart is generated for weekly spending
              and sugar intake. The user also has the option of editing and
              deleting entries.
            </p>
            <p>
              My roles in this project included being a developer and a Scrum
              Master. As a Scrum master, I was responsible for leading the Scrum
              stand up meetings where we tracked our progress. In regards to my
              contribution to the project, I created the initial mock up for the
              UI using Figma. I also created the form utilized to add new drink
              entries, in addition I connected the drink form to the database
              and made changes to the UI for the Login Page and Register Page.
            </p>
          </div>
        </div>
        <section class="slider">
          <FaArrowLeft class="left-arrow" onClick={prevSlide} />
          <FaArrowRight class="right-arrow" onClick={nextSlide} />
          {BobaImages.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && <img src={slide.image} class="image" />}
              </div>
            );
          })}
        </section>
        <div class="dark-end">
          <div class="dark-next">
            <Link to="/DarkMode">Next Project</Link>
          </div>
          <div class="dark-link">
            <Link to="/DarkMode">DarkMode</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boba;
