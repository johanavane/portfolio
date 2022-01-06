import React from "react";
import "../styles/Home.css";
import "@fontsource/shrikhand";

// defining compoennt as a class
// in which render() must be defined
class Home extends React.Component {
  // state = {
  //   loading: true,
  // };

  // componentDidMount() {
  //   this.fakeRequest().then(() => {
  //     const el = document.querySelector(".loader-container");
  //     if (el) {
  //       el.remove(); // removing the spinner element
  //       this.setState({ loading: false }); // showing the app
  //     }
  //   });
  // }

  // fakeRequest = () => {
  //   return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  // };

  render() {
    // if (this.state.loading) {
    //   return null; //app is not ready (fake request is in process)
    // }
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
