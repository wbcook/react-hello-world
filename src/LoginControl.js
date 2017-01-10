import React, { Component } from 'react';
import EmailList from './EmailList';
import SendMail from './SendMail';
import './App.css';


class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false, userName: this.props.name};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const userName = this.state.userName;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div className="LoginControl">
        <div className="Login-control">
          <Greeting isLoggedIn={isLoggedIn} name={userName}/>
          {button}
          <div>
            {isLoggedIn ? (
              <div>
                <EmailList />
                <SendMail />
              </div>
            ) : (
              <span>Login to check your mailbox.</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function UserGreeting(props) {
  const userName = props.name;
  return <h1>Welcome back, {userName}!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  const userName = props.name
  if (isLoggedIn) {
    return <UserGreeting name={userName} />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export default LoginControl;
