import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import element from './createElement'
import BaseInfo from './formElement.jsx'
import LiftStateUp from './liftStateUp.jsx'
import PropTypes from './propTypes.jsx'
import LifeCycel from './lifeCycle.jsx'
import ReducerPractice from './redux/reducer.jsx'
import ReduxPractice from './redux/index.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>React practice</h2>
        </div>
        <p className="App-intro">
          To get started
        </p>
          <ReduxPractice></ReduxPractice>
          <ReducerPractice></ReducerPractice>
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
