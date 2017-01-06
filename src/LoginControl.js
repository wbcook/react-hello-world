import React, { Component } from 'react';
import logo from './logo.svg';
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
