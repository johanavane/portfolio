import React from "react";
import { Link } from "react-router-dom";
import "../styles/DarkMode.css";

function DarkMode() {
  return (
    <div class="darkmode-container">
      <div class="darkmode-layer">
        <div class="title">
          <p class="one">Dark </p>
          <p class="two">Mode</p>
          {/* <hr /> */}
        </div>
        <div class="columns-container">
          <div class="column-language">
            <div class="vane">
              <p>Languages</p>
              <ul class="language">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
          <div class="column-about">
            <div class="description">
              <p>Description</p>
            </div>
            <p>
              This is a chrome extension I created that toggles between light
              mode and dark mode on any chrome webpage. The purpose of this
              project was to challenge myself, since I had never built a chrome
              extension before and I was unfamiliar with the components that
              make up a chrome extension.
            </p>
            <p>
              Below is a demo of how "Dark Mode" works, since it's not in the
              Chrome Web Store.
            </p>
          </div>
        </div>
        <div class="project-video">
          <video autoPlay loop muted width="850" height="500">
            <source src="demo.mov" type="video/mp4" />
          </video>
          <script>document.getElementById('vid').play();</script>
        </div>
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

export default DarkMode;
