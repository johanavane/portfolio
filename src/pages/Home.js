import React from "react";
import "../styles/Home.css";
import "@fontsource/shrikhand";

function home() {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="home-text">
          <p>
            {"JOHANA"}
            <br /> {"MARTINEZ"}
          </p>
        </div>
        <div className="welcome">
          <p> Welcome to my site.</p>
        </div>
      </div>
    </div>
  );
}

export default home;
