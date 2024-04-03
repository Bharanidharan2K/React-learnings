import React, {Component} from "react";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/Home";
import NavBar from "./utility/NavBar/NavBar";

class App extends Component{
  render(){
    return(
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
      </Router>
    )
  }
}

export default App;