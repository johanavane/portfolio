import React from "react";
import { Link } from "react-router-dom";
import "../styles/Boba.css";

function Boba() {
  return (
    <div class="boba-container">
      <div class="boba-layer">
        <div class="boba-title">
          <p class="one">Boba </p>
          <p class="two">Tracker</p>
          {/* <hr /> */}
        </div>
        <div class="boba-columns-container">
          <div class="boba-column-language">
            <p>Languages</p>
            <ul class="boba-language">
              <li>HTML</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
            </ul>
            <p>Library</p>
            <ul class="boba-language">
              <li>React.js</li>
            </ul>
          </div>
          <div class="boba-column-about">
            <div class="boba-description">
              <p>Project Details</p>
            </div>
            {/* <div class="bobatracker-link">
              <a href="http://boba-frontend.s3-website-us-west-1.amazonaws.com/login">
                Link: bobatracker.com
              </a>
            </div> */}
            <p>
              This is a project I was part of while taking the course
              ‘Introduction to Software Engineering’ at UC Santa Cruz. More
              specifically, it is a web application that allows users to track
              their weekly milk tea spending and their average sugar intake.
            </p>
            <p>
              My roles in this project were being a developer and a Scrum
              master, as a Scrum master I was responsible for leading the Scrum
              stand up meetings where we tracked our progress. In regards to my
              contribution to the project, I created the initial mock up for the
              UI using Figma, I also created the form needed to add new drink
              entries, I connected the drink form to the database and I made
              changes to the UI.
            </p>
            <p>
              Although the project is no longer being hosted, I have a detailed
              walkthough of the project below.
            </p>
          </div>
        </div>
        <div class="project-image">
          <img src="Dashboard.png" alt="Girl in a jacket" />
        </div>

        {/* video demo */}
        {/* <div class="boba-project-video">
          <video autoPlay loop muted width="850" height="500">
            <source src="BobaVideo.mov" type="video/mp4" />
          </video>
          <script>document.getElementById('vid').play();</script>
        </div> */}
        <div class="dark-link">
          <Link to="/DarkMode">
            DarkMode<sup> Next Project</sup>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Boba;
