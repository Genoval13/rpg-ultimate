import React, { Component } from 'react';
import NavBar from './NavBar';
import GameSelection from './GameSelection';
import Sorry from './Sorry';
import Login from './Login';
import DndHome from './dnd/DndHome';
import '../style/Director.css';

class Director extends Component {
  constructor () {
    super ();
    this.state = {
      view: 'Home',
      loggedIn: false
    }
    this.handleMainChange = this.handleMainChange.bind(this);
  }

  handleMainChange(view) {
    let newView = `${view}`;
    console.log(newView);
    this.setState({ view: newView });
  }

  render() {
    let page = this.state.view;
    if (page === 'Home') {
      return (
        <div className='home'>
        <NavBar 
          loggedIn={this.state.loggedIn}
          handleMainChange={this.handleMainChange}  
        />
        <GameSelection handleMainChange={this.handleMainChange}/>
        </div>
      )
    } else if (page === "PF" || page === "SR" || page === "CoC") {
      return (
        <div className='sorry'>
          <NavBar 
            loggedIn={this.state.loggedIn}
            handleMainChange={this.handleMainChange}  
          />
          <Sorry />
        </div>
      )
    } else if (page === "Login") {
      return (
        <div className='login'>
          <NavBar 
            loggedIn={this.state.loggedIn}
            handleMainChange={this.handleMainChange}  
          />
          <Login view={page}/>
        </div>
      )
    } else if (page === "DnD") {
      return (
        <div className='dnd'>
          <NavBar
            loggedIn={this.state.loggedIn}
            handleMainChange={this.handleMainChange} 
          />
          <DndHome 
            handleMainChange={this.handleMainChange}
          />
        </div>
      )
    } 
  }
}

export default Director;