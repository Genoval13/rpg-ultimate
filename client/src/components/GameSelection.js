import React, { Component } from 'react';

class GameSelection extends Component {
  constructor(props) {
    super(props);
    this.handleDDClick = this.handleDDClick.bind(this);
    this.handleSRClick = this.handleSRClick.bind(this);
    this.handlePFClick = this.handlePFClick.bind(this);
    this.handleCoCClick = this.handleCoCClick.bind(this);
  }

  handleDDClick() {
    let view = "D&D";
    this.props.handleChange(view);
  }

  handleSRClick() {
    let view = "SR";
    this.props.handleChange(view);
  }

  handlePFClick() {
    let view = "PF";
    this.props.handleChange(view);
  }

  handleCoCClick() {
    let view = "CoC";
    this.props.handleChange(view);
  }

  render() {
    return (
      <div>
        <h2>Choose Your Game:</h2>
        <button onClick={this.handleDDClick}>D&D 5e</button>
        <button onClick={this.handleSRClick}>Shadowrun 4e</button>
        <button onClick={this.handlePFClick}>Pathfinder</button>
        <button onClick={this.handleCoCClick}>Call of Cthulu</button>
      </div>
    )
  }
}

export default GameSelection;