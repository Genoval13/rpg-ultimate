import React, { Component } from 'react';
import Race from './newChar/Race';
import Class from './newChar/Class';
import Skills from './newChar/Skills';

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
    this.updateRace = this.updateRace.bind(this);
    this.updateClass = this.updateClass.bind(this);
  }

  updateRace(choice) {
    this.setState({race : choice, current: 'class'});
  }

  updateClass(choice) {
    this.setState({class: choice, current: 'skills'})
  }

  render() {
    let stage = this.state.current;
    if (stage === 'race') {
      return (
        <Race updateRace={this.updateRace}/>
      )
    } else if (stage === 'class') {
      return (
        <Class updateClass={this.updateClass}/>
      )
    } else if (stage === 'skills') {
      return (
        <Skills />
      )
    }
  }
}

export default NewChar;