import React from "react";
import { Link } from "react-router-dom";
import "../styles/Resume.css";

function Resume() {
  return (
    <div class="resume-container">
      <div class="resume-layer">
        <div class="resume-links">
          <nav>
            <li>
              <Link to="/DarkMode">Dark Mode</Link>
            </li>
            <li>
              <Link to="/Boba">Boba Tracker</Link>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Resume;
