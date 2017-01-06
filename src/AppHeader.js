import React, { Component } from 'react';
import LoginControl from './LoginControl';
import logo from './logo.svg';
import './App.css';


class AppHeader extends Component {
  render() {
    return (
      <div className="AppHeader">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <LoginControl name={this.props.name} />
        </div>
      </div>
    );
  }
}

export default AppHeader;
