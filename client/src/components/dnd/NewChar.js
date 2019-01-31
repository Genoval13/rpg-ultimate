import React, { Component } from 'react';
import Race from './newChar/Race';

class NewChar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'race',
      name: '',
      race: '',
      class: '',
      stats: {
        strength: null,
        dexterity: null,
        constitution: null,
        wisdom: null,
        intelligence: null,
        charisma: null
      },
      proficiencies: [],
      background: '',
      inventory: []
    }
  }

  render() {
    let stage = this.state.current;
    if (stage === 'race') {
      return (
        <Race />
      )
    }
  }
}

export default NewChar;