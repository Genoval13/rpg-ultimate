import React, { Component } from 'react';
import NavBar from './NavBar';
import GameSelection from './GameSelection';
import Sorry from './Sorry';
import Login from './Login';
import DndHome from './dnd/DndHome';
import NewChar from './dnd/NewChar';

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
    this.setState({ view: newView });
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
    } else if (page === "Login" || page === "Register") {
      return (
        <div>
          <NavBar 
            loggedIn={this.state.loggedIn}
            handleChange={this.handleChange}  
          />
          <Login view={page}/>
        </div>
      )
    } else if (page === "D&D") {
      return (
        <div>
          <NavBar
            loggedIn={this.state.loggedIn}
            handleChange={this.handleChange} 
          />
          <DndHome 
            handleChange={this.handleChange}
          />
        </div>
      )
    } else if (page === 'NewChar') {
      return (
        <div>
          <NavBar
            loggedIn={this.state.loggedIn}
            handleChange={this.handleChange} 
          />
          <NewChar />
        </div>
      )
    }
  }
}

export default Director;