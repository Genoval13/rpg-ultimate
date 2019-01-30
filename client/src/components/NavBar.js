import React, { Component } from 'react';
import '../style/NavBar.css';

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
        <div className='navBar'>
          <ul className='navList'>
            <li className='navItem'><button className='homeBtn' name='Home' onClick={this.handleNBClick}>Home</button></li>
            <li className='navItem'><h1 className='navTitle'>RPG Ultimate</h1></li>
            <li className='navItem'><button className='loginBtn' name='Login' onClick={this.handleNBClick}>Login/Register</button></li>
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <button className='homeBtn' onClick={this.handleHomeClick}>Home</button>
          <h1 className='navTitle'>RPG Ultimate</h1>
          <div>
            <h2>Logged in as: {this.state.username}</h2>
          </div>
        </div>
      )
    }
  }
}

export default NavBar;