import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/assets/Data/Courses/Courset";
import Tutorial from "./components/Tutorial";
import Tutor from "./components/Tutor";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scroll";

import SignUp from "./components/SignUp";
import LogIn from "./components/Login";

// sub section
import Web from "./components/assets/Data/Courses/WebDev/Web";
import Python from "./components/assets/Data/Courses/WebDev/python";
import Java from "./components/assets/Data/Courses/WebDev/java";
import Science from "./components/assets/Data/Courses/WebDev/machine";
import Mobile from "./components/assets/Data/Courses/WebDev/mobile";
import Block from "./components/assets/Data/Courses/WebDev/block";
import Cloud from "./components/assets/Data/Courses/WebDev/devOps"
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
          <Route path="/Tutorial" components={Tutorial} exact>
            <Tutorial />
          </Route>
          <Route path="/Tutor" components={Tutor} exact>
            <Tutor />
          </Route>
          <Route path="/SignUp" components={SignUp} exact>
            <SignUp />
          </Route>
          <Route path="/LogIn" components={LogIn} exact>
            <LogIn />
          </Route>

          {/* Sub section */}
          <Route path="/Web" components={Web} exact>
            <Web />
          </Route>
          <Route path="/Python" components={Python} exact>
            <Python />
          </Route>
          <Route path="/Java" components={Java} exact>
            <Java />
          </Route>
          <Route path="/Science" components={Science} exact>
            <Science />
          </Route>
          <Route path="/Mobile" components={Mobile} exact>
            <Mobile />
          </Route>
          <Route path="/Blockchain" components={Block} exact>
            <Block />
          </Route>
          <Route path="/DevOps" components={Cloud} exact>
            <Cloud />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
