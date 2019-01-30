import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <h3>Register</h3>
          <form>
            <label>Username</label>
            <input></input>
            <label>Password</label>
            <input></input>
            <button>Submit</button>
          </form>
        </div>
        <div>
          <h3>Login</h3>
          <form>
            <label>Username</label>
            <input></input>
            <label>Password</label>
            <input></input>
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;