import React, { Component } from 'react';
import CharacterItem from './CharacterItem';

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.passingUpChange = this.passingUpChange.bind(this);
  }

  passingUpChange(view) {
    this.props.handleDnDChange(view);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.characters.map(character => {
            let idx = this.props.characters.indexOf(character);
            return (
              <CharacterItem 
                key={this.props.characters.indexOf(character)}
                info={this.props.characters[idx]}
                index={idx}
                passingUpChange={this.passingUpChange}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default CharacterList;