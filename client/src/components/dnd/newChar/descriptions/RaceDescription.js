import React, { Component } from 'react';

class RaceDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      race: null
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.current !== prevProps.current) {
      const options = {
        method: "GET",
        headers: {
          Accept: "applications/json",
          "Content-Type": "application/json"
        }
      };
  
      fetch(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/races/${this.props.current}`, options)
        .then(res => res.json())
        .then(res => {
          this.setState({ race : res});
        })
    }
  }

  render() {
    if (this.state.race !== null) {
      let asi = this.state.race.ability_bonuses
      return (
        <div>
          <h1>Description:</h1>
          <h2>{this.state.race.name}</h2>
          <ul className='raceTraits'>
            <h4>Traits: </h4>
            <li>
              Ability Score Bonuses:
              <ul className='raceASI'>
                <li>Strength:{asi[0]}</li>
                <li>Dexterity:{asi[1]}</li>
                <li>Constitution:{asi[2]}</li>
                <li>Wisdom:{asi[3]}</li>
                <li>Intelligence:{asi[4]}</li>
                <li>Charisma:{asi[5]}</li>
              </ul>
            </li>
            <li>Age: <br></br>{this.state.race.age}</li>
            <li>Alignment: <br></br>{this.state.race.alignment}</li>
            <li>Size: {this.state.race.size}</li>
            <li>Speed: {this.state.race.speed}</li>
            <h4>Racial Feats: </h4>
            {this.state.race.traits.map(trait => {
              return (
                <li>{trait.name}</li>
              )
            })}
            <h4>Languages: </h4>
            {this.state.race.languages.map(lang => {
              return (
              <li>{lang.name}</li>
              )
            })}
            <h4>Subraces: </h4>
            {this.state.race.subraces.map(sub => {
              return (
                <li>{sub.name}</li>
              )
            })}
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Description:</h1>
        </div>
      )
    }
  }
}

export default RaceDescription;