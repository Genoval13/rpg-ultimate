import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleNBClick = this.handleNBClick.bind(this);
    this.state = {
      loggedIn : this.props.loggedIn,
      username : null
    }
  } 

  handleNBClick(ev) {
    let view = ev.target.name;
    this.props.handleMainChange(view);
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <div>
          <button name='Home' onClick={this.handleNBClick}>Home</button>
          <h1>RPG Ultimate</h1>
          <button name='Login' onClick={this.handleNBClick}>Login/Register</button>
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