import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import DarkMode from "./pages/DarkMode";
import Boba from "./pages/Boba";
import { HashRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove(); // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 4500));
  };

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }

    return (
      <>
        <HashRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Resume" exact component={Resume} />
            <Route path="/DarkMode" exact component={DarkMode} />
            <Route path="/Boba" exact component={Boba} />
          </Switch>
        </HashRouter>
      </>
    );
  }
}

export default App;

// react router dom allows us to have diff pages in app
// Router = tell react we want router in app
// Navbar is a component
// Will be in every single page
// Switch = we want to render one route at a time
// Inside switch we define the diff pages we will be having
// path = destination of a Route
