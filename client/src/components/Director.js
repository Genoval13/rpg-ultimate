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
    let newView = `${view}`
    console.log(newView);
    this.setState({ view: newView });
    console.log(this.state.view);
  }

  render() {
    let page = this.state.view;
    if (page === 'Home') {
      return (
        <div>
        <NavBar 
          loggedIn={this.state.loggedIn}
          handleChange={this.handleChange}  
        />
        <GameSelection handleChange={this.handleChange}/>
        </div>
      )
    } else if (page === "PF" || page === "SR" || page === "CoC") {
      return (
        <div>
          <NavBar 
            loggedIn={this.state.loggedIn}
            handleChange={this.handleChange}  
          />
          <Sorry />
        </div>
      )
    } else if (page === "Login") {
      return (
        <div>
          <NavBar 
            loggedIn={this.state.loggedIn}
            handleChange={this.handleChange}  
          />

        </div>
      )
    }
  }
}

export default Director;