import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class AppHeader extends Component {
  render() {
    return (
      <div className="AppHeader">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello, {this.props.name}!</h1>
        </div>
      </div>
    );
  }
}

export default AppHeader;
