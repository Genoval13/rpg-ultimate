import React, { Component } from 'react';

class ClassDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: ''
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
  
      fetch(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes/${this.props.current}`, options)
        .then(res => res.json())
        .then(res => {
          console.log(res)
          this.setState({ class : res });
        });
    }
  }

  render() {
    if (this.state.class !== '') {
      return (
        <div>
          <h1>Description:</h1>
          <div className='hp'>
            <h3>Hit Points:</h3>
            <h4>Hit Die: {this.state.class.hit_die}</h4>
          </div>
          <div className='prof'>
            <h3>Proficiencies: </h3>
            <ul>
              {this.state.class.proficiencies.map(prof => {
                return (
                  <li>{prof.name}</li>
                )
              })}
            </ul>
          </div>
          <div className='savingThrows'>
            <h3>Saving Throws: </h3>
            <ul>
              {this.state.class.saving_throws.map(save => {
                return (
                  <li>{save.name}</li>
                )
              })}
            </ul>
          </div>
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

export default ClassDescription;