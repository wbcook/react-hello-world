import React, { Component } from 'react';
import './App.css';


class AppIntro extends Component {
  render() {
    return (
      <div className="AppIntro">
        <h3>This component was made by, {this.props.name}.</h3>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default AppIntro;
