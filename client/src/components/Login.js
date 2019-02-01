import React, { Component } from 'react';
import '../style/Login.css';

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
          <h3 className='title'>Register</h3>
          <form className='form'>
            <label className='label'>Username:</label>
            <input></input>
            <label className='label'>Password:</label>
            <input></input>
            <button>Submit</button>
          </form>
        </div>
        <div>
          <h3 className='title'>Login</h3>
          <form className='form'>
            <label className='label'>Username:</label>
            <input></input>
            <label className='label'>Password:</label>
            <input></input>
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;