import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleRegClick = this.handleRegClick.bind(this);
    this.state = {
      loggedIn : this.props.loggedIn,
      username : null
    }
  } 

  handleHomeClick() {
    let view = "Home";
    this.props.handleChange(view);
  }

  handleLoginClick() {
    let view = "Login";
    this.props.handleChange(view);
  }

  handleRegClick() {
    let view = "Register";
    this.props.handleChange(view);
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <div>
          <button onClick={this.handleHomeClick}>Home</button>
          <h1>RPG Ultimate</h1>
          <button onClick={this.handleLoginClick}>Login</button>
          <button onClick={this.handleRegClick}>Register</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.handleHomeClick}>Home</button>
          <h1>RPG Ultimate</h1>
          <div>
            <h2>Logged in as: {this.state.username}</h2>
          </div>
        </div>
      )
    }
  }
}

export default NavBar;