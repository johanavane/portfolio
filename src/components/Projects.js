import React from "react";
import "../styles/Projects.scss";
import { Link } from "react-router-dom";

// Projects - array of objects
const projects = [
  {
    title: "Informative Website for Solar Panel Installation",
    image: "sp-home.png",
    alt: "website landing page with sky and solar panels",
    link: "/solarpanel",
  },
  {
    title: "Colorful Website for 'Rad Hair Art' Hairstyling Services",
    image: "rha-Home.png",
    alt: "quote saying cool hair for cool people with an image of brown hair and image of mix of pastel hair colors",
    link: "/radhair",
  },
  {
    title: "FakeStore API Clothing & Accessories Store",
    image: "storeJacket.png",
    alt: "online store with women's black faux leather jacket",
    link: "/store",
  },
  {
    title: "Milk Tea Expense & Sugar Consumption Manager",
    image: "Register.png",
    alt: "online store with one blue backpack, one mens khaki jacket and two men's shirts",
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

function Projects() {
  return (
    <div className="project-gallery">
      <section>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
    </div>
  );
}

export default Projects;
