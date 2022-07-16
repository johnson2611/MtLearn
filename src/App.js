import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Route,Link, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
    return(
        <>
        <Router>
            <Navbar/>

            
            <Switch>
                <Route path= '/' components = {Home} exact>
                    <Home/>
                </Route>
                <Route path= '/about' components = {About} exact>
                    <About/>
                </Route>
                <Route path= '/service' components = {Service} exact>
                    <Service/>
                </Route>
                <Route path= '/portfolio' components = {Portfolio} exact>
                    <Portfolio/>
                </Route>
                <Route path= '/contact' components = {Contact} exact>
                    <Contact/>
                </Route>
            </Switch>
       </Router>
        </>
    )
}
export default App
