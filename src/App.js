import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/assets/Data/Courses/Courset";
import Tutorial from "./components/Tutorial";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scroll";
// import {useScroll} from 'scroll-behavior';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" components={Home} exact>
            <Home />
            <Footer />
          </Route>
          <Route path="/Courses" components={Courses} exact>
            <Courses />
          </Route>
          <Route path="/Tutoial" components={Tutorial} exact>
            <Tutorial />
          </Route>
          <Route path="/Services" components={Services} exact>
            <Services />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
