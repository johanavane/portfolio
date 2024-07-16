import React from "react";
import Pdf from "../pdf/JohanaMartinez_Resume.pdf";
import "../styles/Home.scss";
import About from "./About";
import Projects from "../components/Projects";

function ContactLink({ href, text }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer">
        <span>{text}</span>
      </a>
    </li>
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
      <Projects />
      <About />
    </>
  );
}

export default Home;
