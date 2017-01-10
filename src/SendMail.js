import React, { Component } from 'react';
import './App.css';

class SendMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: 'No Subject',
      message: 'Enter your message here, then click send.'
    };

    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubjectChange(event) {
    this.setState({subject: event.target.value});
  }

  handleSubmit(event) {
    alert('Your message was sent: \n' + this.state.subject + ': \n' + this.state.message);
    event.preventDefault();
  }

  render() {
    return (
      <div className="SendMail">
        <div className="SendMail-class">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <textarea value={this.state.message} onChange={this.handleMessageChange} />
            </label>
            <label>
              Pick a subject for your message:
              <select value={this.state.subject} onChange={this.handleSubjectChange}>
                <option value="React">React</option>
                <option value="Redux">Redux</option>
                <option value="JSX">JSX</option>
                <option value="Rick and Morty">Rick and Morty</option>
              </select>
            </label>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

export default SendMail;
