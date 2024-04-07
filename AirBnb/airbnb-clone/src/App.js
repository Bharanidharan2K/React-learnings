import React, {Component} from "react";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/Home";
import NavBar from "./utility/NavBar/NavBar";
import SingleFullVenue from "./pages/SingleFullVenue/SingleFullVenue";

class App extends Component{
  render(){
    return(
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/venue/:vid" component={SingleFullVenue} />
      </Router>
    )
  }
}

export default App;