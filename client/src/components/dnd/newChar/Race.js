import React, { Component } from 'react';
import RaceDescription from './descriptions/RaceDescription';
import '../../../style/Race.css';

class Race extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null
    }
    this.handleRaceSubmit = this.handleRaceSubmit.bind(this);
    this.handleRaceChange = this.handleRaceChange.bind(this);
  }

  handleRaceChange(ev) {
    this.setState({ current: ev.target.value});
  }

  handleRaceSubmit(ev) {
    ev.preventDefault();

    if (ev.target.value !== '') {
      this.props.updateRace(ev.target.value);
    } else {
      this.props.updateRace('4');
    }
  }

  render() {
    return (
      <div>
        <div>
            <form onSubmit={this.handleRaceSubmit}>
              <label>
                <h2 className='text'>Choose your race:</h2>
                <select className='text' defaultValue='' onChange={this.handleRaceChange}>
                  <option value=''>--Please select a race--</option>
                  <option value='1'>Dwarf</option>
                  <option value='2'>Elf</option>
                  <option value='3'>Halfling</option>
                  <option value='4'>Human</option>
                  <option value='5'>Dragonborn</option>
                  <option value='6'>Gnome</option>
                  <option value='7'>Half-Elf</option>
                  <option value='8'>Half-Orc</option>
                  <option value='9'>Tiefling</option>
                </select>
              </label>
              <input type='submit' value='Submit' />
            </form>
          </div>
          <div>
            <RaceDescription current={this.state.current}/>
          </div>
      </div>
    )
  }
}

export default Race;