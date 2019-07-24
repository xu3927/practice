import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Router from './router'
import { Provider } from 'react-redux'
import * as models from '@/models/index'
import { init } from "@rematch/core";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router></Router>
      </div>
    );
  }
}

const store = init({
  models
});

const Root = () => (<Provider store={store}>
  <App></App>
</Provider>)

export default Root;
