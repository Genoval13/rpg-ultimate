import React, { Component } from 'react';

class CharacterItem extends Component {
  constructor(props) {
    super(props);
    this.handleCharClick = this.handleCharClick.bind(this);
  }

  handleCharClick() {
    this.props.handleChange('')
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.name}</h3>
        <h3>{this.props.info.race}</h3>
        <h3>{this.props.info.class}</h3>
        <button onClick={this.handleCharClick}></button>
      </div>
    )
  }
}

export default CharacterItem;