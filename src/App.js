import React, { Component } from 'react';
import AppIntro from './AppIntro';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Will',
  lastName: 'Cook'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello, {formatName(user)}!</h2>
        </div>
        <AppIntro />
      </div>
    );
  }
}

export default App;
