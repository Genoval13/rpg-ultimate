import React, { Component } from 'react';

class GameSelection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Choose Your Game:</h2>
        <button>D&D 5e</button>
        <button>Shadowrun 4e</button>
        <button>Pathfinder</button>
        <button>Call of Cthulu</button>
      </div>
    )
  }
}

export default GameSelection;