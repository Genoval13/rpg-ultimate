import React, { Component } from 'react';
import '../../../../style/Race.css';
import '../../../../style/RaceDescription.css';

class RaceDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      race: ''
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.current !== prevProps.current && this.props.current !== '') {
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
          console.log(res);
        })
    } 
  }

  render() {
    if (this.state.race !== '') {
      let asi = this.state.race.ability_bonuses;
      return (
        <div>
          <h1 className='text' id='text'>Description:</h1>
          <div className='race'>
          <h2 className='raceName'>{this.state.race.name}</h2>
            <h4 className='desc'>Traits: </h4>
              <p className='desc'>Ability Score Bonuses:</p>
              <ul className='raceASI'>
                <li>Strength: +{asi[0]}</li>
                <li>Dexterity: +{asi[1]}</li>
                <li>Constitution: +{asi[2]}</li>
                <li>Wisdom: +{asi[3]}</li>
                <li>Intelligence: +{asi[4]}</li>
                <li>Charisma: +{asi[5]}</li>
              </ul>
            <h4 className='desc'>Age:</h4> 
            <p className='desc'>{this.state.race.age}</p>
            <h4 className='desc'>Alignment:</h4> 
            <p className='desc'>{this.state.race.alignment}</p>
            <h4 className='desc'>Size:</h4> 
            <p className='desc'>{this.state.race.size}</p>
            <h4 className='desc'>Speed: </h4> 
            <p className='desc'>{this.state.race.speed} ft.</p>
            <h4 className='desc'>Racial Feats: </h4>
            {this.state.race.traits.map(trait => {
              return (
                <li className='desc'>{trait.name}</li>
              )
            })}
            <h4 className='desc'>Languages: </h4>
            {this.state.race.languages.map(lang => {
              return (
              <li className='desc'>{lang.name}</li>
              )
            })}
            <h4 className='desc'>Subraces: </h4>
            {this.state.race.subraces.map(sub => {
              return (
                <li className='desc'>{sub.name}</li>
              )
            })}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h1 className='text' id='text'>Description:</h1>
        </div>
      )
    }
  }
}

export default RaceDescription;