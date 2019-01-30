import React, { Component } from 'react';

class GameSelection extends Component {
  constructor(props) {
    super(props);
    this.handleGSClick = this.handleGSClick.bind(this);
  }

  handleGSClick = (ev) => {
    let view = ev.target.name;
    this.props.handleMainChange(view);
  }

  render() {
    return (
      <div>
        <h2>Choose Your Game:</h2>
        <button name='DnD' onClick={this.handleGSClick}>D&D 5e</button>
        <button name='SR' onClick={this.handleGSClick}>Shadowrun 4e</button>
        <button name='PF' onClick={this.handleGSClick}>Pathfinder</button>
        <button name='CoC' onClick={this.handleGSClick}>Call of Cthulu</button>
      </div>
    )
  }
}

export default GameSelection;