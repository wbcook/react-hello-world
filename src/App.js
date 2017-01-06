import React, { Component } from 'react';
import AppIntro from './AppIntro';
import AppHeader from './AppHeader';
import Clock from './Clock';
import Laser from './Laser';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Anonymous',
  lastName: 'User'
};

const developer = {
  firstName: 'Will',
  lastName: 'Cook'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader name={formatName(user)} />
        <AppIntro name={formatName(developer)} />
        <Clock />
        <Laser />
      </div>
    );
  }
}

export default App;
