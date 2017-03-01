import React, { Component } from 'react';
import logo from './logo.png';
import Card from './card'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to MyPQue</h2>
        </div>
        <Card />
      </div>
    );
  }
}

export default App;
