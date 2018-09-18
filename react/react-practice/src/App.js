import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Router from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router></Router>
      </div>
    );
  }
}

export default App;
