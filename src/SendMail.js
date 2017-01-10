import React, { Component } from 'react';
import './App.css';

class SendMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Enter your message here, then click send.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your message was sent: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="SendMail">
        <div className="SendMail-class">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

export default SendMail;
