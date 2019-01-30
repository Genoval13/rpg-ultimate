import React, { Component } from 'react';

class CharacterItem extends Component {
  constructor(props) {
    super(props);
    this.handleCharClick = this.handleCharClick.bind(this);
  }

  handleCharClick(ev) {
    let view = ev.target.name;
    this.props.passingUpChange(view);
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.name}</h3>
        <h3>{this.props.info.race}</h3>
        <h3>{this.props.info.class}</h3>
        <button name={this.props.index} onClick={this.handleCharClick}>View</button>
      </div>
    )
  }
}

export default CharacterItem;