import React, { Component } from 'react';
import './App.css';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="Clock">
        <h2>This is the Clock component.</h2>
        <p className="Clock-class">
          It is {this.state.date.toLocaleTimeString()}.
        </p>
      </div>
    );
  }
}

export default Clock;