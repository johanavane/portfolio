import React from "react";
import "../styles/About.css";
import * as FaIcons from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";

// import { IconName } from "react-icons/fa";

function About() {
  return (
    <div class="grid-container">
      <div class="grid-one">box 1</div>
      <div class="grid-two">
        <div className="location">
          <p>
            <FaIcons.FaMapMarkerAlt />
            San Jose, CA
          </p>
        </div>
        <div className="intro">
          <p>
            Thank you for stopping by my page to learn a bit about me. I am
            Johana, a first generation college graduate from the University of
            California Santa Cruz. At UCSC I obtained a B.S. in Computer Science
            and I am interested in job opportunities in web developemnt.
          </p>
          <p>
            Outside of coding I enjoy doing yoga, thrifting, running, watching
            comedy tv shows and hiking. One of my favorite places I have hiked
            was Angel's Landing hiking trail at Zion National Park. Although the
            trail was challenging, the views were beautiful and definitely worth
            it!
          </p>
          <p>
            If you would like to connect with me about any work opportunites, I
            have my resume here or you can reach me at any of the links I have
            below.
          </p>
        </div>
        <div class="icon-links">
          <p>
            <a href="mailto:johanavmar27@gmail.com">
              <GrMail />
            </a>
            <a href="mailto:johanavmar27@gmail.com">
              <GrLinkedin />
            </a>
          </p>
        </div>
      </div>
      {/* <div class="grid-four">
        <a href="mailto:johanavmar27@gmail.com">Email</a>
        <a href="https://www.instagram.com/bbyxjamz/">Instagram</a>
      </div> */}
    </div>
  );
}

export default About;
