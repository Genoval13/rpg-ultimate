import React, { Component } from 'react';
import CharacterItem from './CharacterItem';

class DndHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [{name: 'test', class: 'test', race: 'test'}]
    }
  }

  handleNewClick() {
    this.props.handleChange('NewChar');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleNewClick}>Create New Character</button>
        <div>
          <ul>
            {this.state.characters.map(character => {
              let idx = this.state.characters.indexOf(character);
              return (
                <CharacterItem 
                  key={this.state.characters.indexOf(character)}
                  info={this.state.characters[idx]}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default DndHome;