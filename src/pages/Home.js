import React from "react";
import "../styles/Home.css";
import "@fontsource/shrikhand";

// defining compoennt as a class
// in which render() must be defined
class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-wrapper">
          <div className="home-text">
            <a>JOHANA.</a>
          </div>
          {/* <div className="welcome">
            <p> Welcome to my site.</p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Home;

// Reacts lets you define componets are classes or fucntions
// function home() {
//   return (
//     <div className="home-container">
//       <div className="home-wrapper">
//         <div className="home-text">
//           <a>JOHANA.</a>
//         </div>
//         {/* <div className="welcome">
//           <p> Welcome to my site.</p>
//         </div> */}
//       </div>
//     </div>
//   );
// }
