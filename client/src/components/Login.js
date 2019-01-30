import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.view === "Login") {
      return (
        <h1>Login</h1>
      )
    } else {
      return (
        <h1>Register</h1>
      )
    }
  }
}

export default Login;