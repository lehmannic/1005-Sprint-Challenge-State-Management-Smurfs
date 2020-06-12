import React, { Component } from "react";
import "./App.css";

import Header from './Header'
import Village from './Village'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <Village /> 
      </div>
    );
  }
}


export default App;
