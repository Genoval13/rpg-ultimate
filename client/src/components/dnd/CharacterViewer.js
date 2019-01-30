import React, { Component } from 'react';

class CharacterViewer extends Component {

  render() {
    return (
      <div>
        <h4>{this.props.info.name}</h4>
      </div>
    )
  }
}

export default CharacterViewer;