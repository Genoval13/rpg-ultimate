import React, { Component } from 'react';

class Character extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.name}</h3>
        <h3>{this.props.info.race}</h3>
        <h3>{this.props.info.class}</h3>
      </div>
    )
  }
}

export default Character;