import React from "react";
import "../styles/About.css";
import * as FaIcons from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import Pdf from "../pdf/JohanaMartinez_Resume.pdf";

// import { IconName } from "react-icons/fa";

class About extends React.Component {
  state = {
    img: "hiking.jpg",
  };
  // constructor(props) {
  //   super(props);
  //   this.stateih = { windowHeightin: window.innerHeight };
  //   this.stateiw = { windowWidthin: window.innerWidth };
  // }
  // componentDidMount() {
  //   window.addEventListener("resize", this.handleResize);
  // }
  // componentWillUnmount() {
  //   window.addEventListener("resize", this.handleResize);
  // }

  render() {
    // const handleResize = (e) => {
    //   this.setState({ windowHeightin: window.innerHeight });
    //   this.setState({ windowWidthin: window.innerWidth });
    // };
    // const { windowHeightin } = this.stateih;
    // const { windowWidthin } = this.stateiw;
    return (
      <div class="flexbox-container">
        <div class="grid-photo">
          <div class="portrait">
            <img src="selfphoto2.png" />
            {/* <img src="hiking.jpg" class="upper-image" /> */}
            {/* <img
              src={this.state.img}
              onMouseEnter={() => {
                this.setState({
                  img: "hiking.jpg",
                });
              }}
              onMouseOut={() => {
                this.setState({
                  img: "portrait.jpeg",
                });
              }}
            /> */}
            {/* <img src="portrait.jpeg" alt="me at beach" /> */}
          </div>
        </div>
        <div class="grid-two">
          <div className="location">
            <p>
              <FaIcons.FaMapMarkerAlt />
              <a> San Jose, CA</a>
            </p>
          </div>
          <div className="intro">
            <p>
              Hello! Thank you for stopping by my page to learn more about me.
              I'm Johana, a first generation college graduate from the
              University of California, Santa Cruz. I obtained a B.S. in
              Computer Science and I'm currently interested in job opportunities
              in Web Development.
            </p>
            <p>
              Outside of coding I enjoy thrifting, running, watching comedy tv
              shows and hiking. I've hiked many beautiful places including Zion
              National Park, which is known for it's many challenging trails
              like Angel's Landing. It was my favorite trail to hike by far,
              although the trail was challenging and I had to wake up at 4 am to
              avoid big crowds; the views were beautiful and definitely worth
              it!
            </p>
            <p>
              If you would like to connect with me about any work opportunities,
              you can reach me at any of the links I have below and you can also
              check out my <a class="resume"> resume </a>
              <a href={Pdf} target="_blank">
                here
              </a>
              .
            </p>
          </div>
          <div class="icon-links">
            <p>
              <a href="mailto:johanamalv@gmail.com">
                <GrMail />
              </a>
              <a href="https://www.linkedin.com/in/johana-ma/" target="_blank">
                <GrLinkedin />
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
