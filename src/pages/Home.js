import React from "react";
import { Link } from "react-router-dom";
import Pdf from "../pdf/JohanaMartinez_Resume.pdf";
import "../styles/Home.scss";
import imageCS from "../images/projectCS.png";
import imageBT from "../images/projectBT.png";
import imageRHA from "../images/rha-home.png";
import imageSP from "../images/sp-home.png";

function ContactLink({ href, text }) {
  return (
    <li>
      <a href={href} target="_blank">
        <span>{text}</span>
      </a>
    </li>
  );
}

// Projects - array of objects
const projects = [
  {
    title: "Beautiful Website for Solar Panel Installation",
    image: imageSP,
    alt: "",
    link: "/solarpanel",
  },
  {
    title: "Unique Website for 'Rad Hair Art'",
    image: imageRHA,
    alt: "",
    link: "/radhair",
  },
  {
    title: "FakeStore API Clothing & Accessories Store",
    image: imageCS,
    alt: "",
    link: "/store",
  },
  {
    title: "Milk Tea Expense & Sugar Consumption Manager",
    image: imageBT,
    alt: "",
    link: "/boba",
  },
];

function ProjectCard({ title, image, alt, link }) {
  return (
    <div className="project">
      <div className="project-img">
        <img src={image} alt={alt} />
      </div>
      <div className="project-text">
        <h3>{title}</h3>
        <p>Web Design & Development</p>
        <Link to={link}>
          <span>VIEW PROJECT</span>
        </Link>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="landing-container">
        <div className="gradient-container">
          <section className="greeting">
            <h1>
              Hello,
              <br />
              I'm Johana.
              <br />A front end developer.
            </h1>
          </section>
          <section>
            <h2>Let's connect:</h2>
            <ul className="links">
              <ContactLink
                href={"mailto:johanamalv@gmail.com"}
                text={"Email"}
              />
              <ContactLink href={Pdf} text={"Resume"} />
              <ContactLink
                href={"https://www.linkedin.com/in/johana-ma/"}
                text={"LinkedIn"}
              />
              <ContactLink
                href={"https://github.com/johanavane"}
                text={"GitHub"}
              />
            </ul>
          </section>
        </div>
      </section>
      <div className="project-gallery">
        <section>
          <h2>Featured Work</h2>
        </section>
        {/* Project Card - Projects Info */}
        <section>
          {projects.map((project) => (
            <ProjectCard {...project} />
          ))}
        </section>
      </div>
    </>
  );
}

export default Home;
