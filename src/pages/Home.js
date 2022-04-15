import React from "react";
import "../styles/Home.css";
import "@fontsource/shrikhand";

// defining compoennt as a class
// in which render() must be defined
class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div class="circle">
          <div className="home-wrapper">
            <div class="portfolio">
              <a> PORTFOLIO - 2022</a>
            </div>

            <div className="name">
              <p>JOHANA</p>
              <p>MARTINEZ</p>
            </div>
            {/* <div class="portfolio">
              <a> PORTFOLIO - 2022</a>
            </div> */}
            <div class="welcome">
              <a> Welcome to my corner of the internet.</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
