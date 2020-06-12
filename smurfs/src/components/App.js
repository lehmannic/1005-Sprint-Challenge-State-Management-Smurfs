import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import SmurfForm from './SmurfForm'
import Village from './Village';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <SmurfForm />
        <Village />
      </div>
    );
  }
}

export default App;
