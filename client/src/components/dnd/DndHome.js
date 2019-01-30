import React, { Component } from 'react';
import Character from './Character';

class DndHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [{name: 'test', class: 'test', race: 'test'}]
    }
  }

  render() {
    return (
      <div>
        <button>Create New Character</button>
        <div>
          <ul>
            {this.state.characters.map(character => {
              let idx = this.state.characters.indexOf(character);
              return (
                <Character 
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