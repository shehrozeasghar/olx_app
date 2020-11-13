import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import About from "../container/About.js";
import Home from "../container/Home.js";

class Approuter extends Component
{
    render()
    {
        return(
            <Router>
                <Route exact path='/' component= {Home} />
                <Route path='/about' component={About} />
            </Router>
        )
    }
}

export default Approuter;