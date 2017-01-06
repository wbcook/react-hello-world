import React, { Component } from 'react';
import './App.css';


class Laser extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className="Clock">
        <h2>Fire the "Laser"?</h2>
        <div className="Laser-class">
          <button onClick={this.handleClick}>
            The laser is: {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>
    );
  }
}

export default Laser;
