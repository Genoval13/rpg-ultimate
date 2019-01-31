import React, { Component } from 'react';
import Race from './newChar/Race';
import Class from './newChar/Class';

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

  updateRace(choice) {
    this.setState({race : choice, current: 'class'});
  }

  updateClass(choice) {
    this.setState({class: choice})
  }

  render() {
    let stage = this.state.current;
    if (stage === 'race') {
      return (
        <Race updateRace={this.updateChar}/>
      )
    } else if (stage === 'class') {
      return (
        <Class />
      )
    }
  }
}

export default NewChar;