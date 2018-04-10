import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import element from './createElement'
import BaseInfo from './formElement.jsx'
import LiftStateUp from './liftStateUp.jsx'
import PropTypes from './propTypes.jsx'
import LifeCycel from './lifeCycle.jsx'
import ReduxPractice from './redux.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <ReduxPractice></ReduxPractice>
          {element}
          <BaseInfo></BaseInfo>
          <LiftStateUp></LiftStateUp>
          <PropTypes content='字符串' bool={true}></PropTypes>
          <LifeCycel></LifeCycel>

      </div>
    );
  }
}

export default App;
