import React, { Component } from 'react';
import './App.css';

const emails = [
  {key:1, subject:"React"},
  {key:2, subject:"Re: React"},
  {key:3, subject:"Redux"},
  {key:4, subject:"StarMonkey Blueprints"},
  {key:5, subject:"Laser"}
];

const emailsList = emails.map((email, index) =>
<li key={email.key}>
  {email.subject}
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
