import React, { Component } from 'react';
import './App.css';

const emails = ["React", "Re: React", "Redux", "StarMonkey Blueprints", "Laser"];
const emailsList = emails.map((email, index) =>
  <li key={index}>
    {email}
  </li>
);

class EmailList extends Component {
  constructor(props) {
    super(props);
    this.state = {emailsList: emailsList};
  }

  render() {
    return (
      <div className="EmailList">
        <div className="Email-class">
          <span>You have {this.state.emailsList.length} unread messages.</span>
          <ul>{this.state.emailsList}</ul>
        </div>
      </div>
    );
  }
}

export default EmailList;
