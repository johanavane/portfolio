import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Resume" exact component={Resume} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

{
  // react router dom allows us to have diff pages in app
  // Router = tell react we want router in app
}
{
  // Navbar is a component
  // Will be in every single page
}
{
  // Switch = we want to render one route at a time
  // Inside switch we define the diff pages we will be having
  // path = destination of a Route
}
