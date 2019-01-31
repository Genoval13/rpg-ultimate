import React, { Component } from 'react';

class Race extends Component {
  constructor(props) {
    super(props);
    this.handleRaceSubmit = this.handleRaceSubmit.bind(this);
  }

  handleRaceSubmit(ev) {
    let choice = ev.target.value;
    this.props.updateChar(choice);
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleRaceSubmit}>
            <label>
              Choose your race:
              <select value=''>
                <option value=''>--Please select a race--</option>
                <option value='Dwarf'>Dwarf</option>
                <option value='Elf'>Elf</option>
                <option value='Halfling'>Halfling</option>
                <option value='Human'>Human</option>
                <option value='Dragonborn'>Dragonborn</option>
                <option value='Gnome'>Gnome</option>
                <option value='Half-Elf'>Half-Elf</option>
                <option value='Half-Orc'>Half-Orc</option>
                <option value='Tiefling'>Tiefling</option>
              </select>
            </label>
            <input type='submit' value='Submit' />
          </form>
        </div>
    )
  }
}

export default Race;