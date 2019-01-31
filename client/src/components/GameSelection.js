import React, { Component } from 'react';
import '../style/GameSelection.css'

class GameSelection extends Component {
  constructor(props) {
    super(props);
    this.handleGSClick = this.handleGSClick.bind(this);
  }

  handleGSClick = (ev) => {
    let view = ev.target.name;
    console.log(view)
    this.props.handleMainChange(view);
  }

  render() {
    return (
      <div className='gameSelectBody'>
        <h1 className='gameSelectTitle'>Choose Your Game:</h1>
        <div className='gameSelect1'>
        <button className='gameBtn' name='DnD' onClick={this.handleGSClick}>D&D 5e</button>
        <button className='gameBtn' name='SR' onClick={this.handleGSClick}>Shadowrun 4e</button>
      </div>
      <div className='gameSelect2'>  
        <button className='gameBtn' name='PF' onClick={this.handleGSClick}>Pathfinder</button>
        <button className='gameBtn' name='CoC' onClick={this.handleGSClick}>Call of Cthulu</button>
        </div>
      </div>
    )
  }
}

export default GameSelection;