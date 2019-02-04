import React, { Component } from 'react';
import CharacterList from './CharacterList'
import NewChar from './NewChar';
import CharacterViewer from './CharacterViewer';
import '../../style/DndHome.css';

class DndHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Home',
      characters: [{name: 'test', class: 'test', race: 'test'}, {name: 'test2', class: 'test2', race: 'test2'},{name: 'test3', class: 'test3', race: 'test3'}]
    }
    this.handleDnDChange = this.handleDnDChange.bind(this);
    this.handleNewClick = this.handleNewClick.bind(this);
  }

  handleDnDChange(view) {
    this.setState({ view: view });
  }

  handleNewClick(ev) {
    this.handleDnDChange(ev.target.name);
  }

  render() {
    let page = this.state.view;
    if (page === 'Home') {
      return (
        <div className='dndHome'>
          <div className='newDiv'>
            <h2 className='dndHomeTitles'>Create A New Character</h2>
            <button className='newBtn' name='New' onClick={this.handleNewClick}></button>
          </div>
          <h1 className='or'>OR</h1>
          <div className='newDiv' id='list'>
            <h2 className='dndHomeTitles'>Current Characters: </h2>
            <CharacterList 
              characters={this.state.characters}
              handleDnDChange={this.handleDnDChange}
            />
          </div>
        </div>
      )
    } else if (page === 'New') {
      return (
        <NewChar />
      )
    } else if (page === '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7') {
      return (
        <CharacterViewer
          info={this.state.characters[page]}
        />
      )
    }
  } 
}

export default DndHome;