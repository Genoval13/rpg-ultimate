import React, { Component } from 'react';
import NavBar from './NavBar';
import GameSelection from './GameSelection';
import Sorry from './Sorry';

class Director extends Component {
  constructor () {
    super ();
    this.state = {
      view: 'Home',
      loggedIn: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(view) {
    this.setState({ view: view });
  }

  render() {
    let page = this.state.view;
    if (page === 'Home') {
      return (
        <div>
        <NavBar />
        <GameSelection />
        </div>
      )
    } else if (page === "PF" || page === "SR" || page === "CoC") {
      return (
        <div>
          <NavBar />
          <Sorry />
        </div>
      )
    }
  }
}

export default Director;