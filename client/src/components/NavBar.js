import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick(e) {
    let view = e.target;
    console.log(view, this.props);
    // this.props.handleChange(view);
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClick(e)}>Home</button>
        <h1>RPG Ultimate</h1>
        {/* <button onClick={this.handleClick()}>Login</button> */}
        {/* <button onClick={this.handleClick()}>Register</button> */}
      </div>
    )
  }
}

export default NavBar;