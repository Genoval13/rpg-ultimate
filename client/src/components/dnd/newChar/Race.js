import React, { Component } from 'react';

class Race extends Component {


  render() {
    return (
      <div>
          <h1>Choose your race:</h1>
          <select>
            <option value=''>--Please select a race--</option>
            <option value='Barbarian'>Barbarian</option>
            <option value='Bard'>Bard</option>
            <option value='Cleric'>Cleric</option>
            <option value='Druid'>Druid</option>
            <option value='Fighter'>Fighter</option>
            <option value='Monk'>Monk</option>
            <option value='Paladin'>Paladin</option>
            <option value='Ranger'>Ranger</option>
            <option value='Rogue'>Rogue</option>
            <option value='Sorceror'>Sorceror</option>
            <option value='Warlock'>Warlock</option>
            <option value='Wizard'>Wizard</option>
          </select>
        </div>
    )
  }
}

export default Race;