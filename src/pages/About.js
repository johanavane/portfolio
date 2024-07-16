import React from "react";
import "../styles/About.scss";
import Pdf from "../pdf/JohanaMartinez_Resume.pdf";

class About extends React.Component {
  render() {
    return (
      <div id="about-me-section" className="flexbox-container">
        <div className="flex-photo about-box">
          <img
            src="self-portrait.png"
            alt="portrait of a woman wearing a black button up leaning on a brown couch"
          />
        </div>
        <div className="flex-about about-box">
          <div className="intro">
            <p>ABOUT ME</p>
            <p>
              Hi! I'm Johana, a first-generation college graduate from UC Santa
              Cruz with a B.S. in Computer Science. I'm currently seeking
              front-end development opportunities.
            </p>
            <p>
              I am skilled in: React.js | Next.js | JavaScript | Python | HTML |
              CSS | SCSS
            </p>
            <p>
              Outside of coding, I love hiking and have explored many beautiful
              trails. One of my favorites Angel's Landing at Zion National Park.
              Despite waking up at 4 am to avoid the big crowds, I enjoyed the
              challenge of the trail and the amazing views!
            </p>
            <p>
              If you'd like to connect about job opportunities or engage in tech
              discussions, feel free to reach out. You can connect through the
              links above and view my resume{" "}
              <a href={Pdf} target="_blank" rel="noreferrer">
                here.
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
