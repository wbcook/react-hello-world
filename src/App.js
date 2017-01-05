import React, { Component } from 'react';
import AppIntro from './AppIntro';
import AppHeader from './AppHeader';
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
        <AppHeader name={formatName(user)} />
        <AppIntro name={formatName(user)} />
      </div>
    );
  }
}

export default App;
