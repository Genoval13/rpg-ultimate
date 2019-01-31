import React, { Component } from 'react';

class Class extends Component {
  constructor(props) {
    super(props)
    this.handleClassSubmit = this.handleClassSubmit.bind(this);
  }

  handleClassSubmit(ev) {
    this.props.updateClass(ev.target.value);
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleClassSubmit}>
            <label>
              Choose your class:
              <select value=''>
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
            </label>
            <input type='submit' value='Submit' />
          </form>
        </div>
    )
  }
}

export default Class;