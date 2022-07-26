import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Store.css";
import { StoreImages } from "../components/StoreImages";
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
    <div class="store-container">
      <div class="store-layer">
        <div class="store-title">
          <p class="one">Online </p>
          <p class="two">Store</p>
        </div>
        <div class="store-columns-container">
          <div class="store-column-language">
            <div class="vane">
              <p>Languages</p>
              <ul class="store-language">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div class="vane">
              <p>Library</p>
              <ul class="store-language">
                <li>React.js</li>
              </ul>
            </div>
          </div>
          <div class="store-column-about">
            <div class="store-description">
              <p>Project Details</p>
            </div>
            <p>
              This is an online store I created by retrieving data from the
              FakeStore API. I wanted to focus on the front end aspect of the
              project, so using the FakeStore API allowed me to use data without
              having to create my own database. Within the women’s, men’s and
              jewelry categories I fetched data for product titles, images,
              prices, and descriptions. From there I created individual product
              pages for each item the user would be interested in purchasing.
              Since I wanted to replicate the feel of an online store I also
              implemented a landing page, a user login page and a sign up page.
            </p>
            <p>
              Aside from developing this project, I used Figma to design the
              layout of each page and create a web application with a cohesive
              design that would be easy to navigate. Although this project is
              not being hosted, I have included images of the project below.
            </p>
          </div>
        </div>
        <section class="slider">
          <FaArrowLeft class="left-arrow" onClick={prevSlide} />
          <FaArrowRight class="right-arrow" onClick={nextSlide} />
          {StoreImages.map((slide, index) => {
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
        <div class="boba-end">
          <div class="boba-next">
            <Link to="/Boba">Next Project</Link>
          </div>
          <div class="boba-link">
            <Link to="/Boba">BobaTracker</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
