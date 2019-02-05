import React, { Component } from 'react';
import ClassDescription from './descriptions/ClassDescription';
import '../../../style/Class.css';

class Class extends Component {
  constructor(props) {
    super(props)
    this.state ={
      current: null
    }
    this.handleClassChange = this.handleClassChange.bind(this);
    this.handleClassSubmit = this.handleClassSubmit.bind(this);
  }

  handleClassChange(ev) {
    this.setState({ current: ev.target.value});
  }

  handleClassSubmit(ev) {
    ev.preventDefault();

    if (this.state.current !== '') {
      this.props.updateClass(this.state.current);
    } else {
      this.props.updateClass('5');
    }
  }


  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleClassSubmit}>
            <label>
              <h2 className='classChoose'>Choose your class:</h2>
              <select defaultValue='' onChange={this.handleClassChange}>
                <option value=''>--Please select a class--</option>
                <option value='1'>Barbarian</option>
                <option value='2'>Bard</option>
                <option value='3'>Cleric</option>
                <option value='4'>Druid</option>
                <option value='5'>Fighter</option>
                <option value='6'>Monk</option>
                <option value='7'>Paladin</option>
                <option value='8'>Ranger</option>
                <option value='9'>Rogue</option>
                <option value='10'>Sorceror</option>
                <option value='11'>Warlock</option>
                <option value='12'>Wizard</option>
              </select>
            </label>
            <input type='submit' value='Submit' />
          </form>
        </div>
        <div>
          <ClassDescription current={this.state.current}/>
        </div>
        </div>
    )
  }
}

export default Class;