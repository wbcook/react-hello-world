import React, { Component } from 'react';
import './App.css';


class AppIntro extends Component {
  render() {
    return (
      <div className="AppIntro">
        <h2>This is the AppIntro component made by: {this.props.name}.</h2>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default AppIntro;
