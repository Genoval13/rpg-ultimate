import React, { Component } from 'react';

class ClassDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dndApi : '',
      betaApi : ''
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
          this.setState({ dndApi : res});
        })

      // fetch(`https://api-beta.open5e.com/classes/${this.props.}/`)
    }
  }

  render() {
    if (this.state.class !== '') {
      return (
        <div>
          <h1>Description:</h1>
          <div className='hp'>
            <h3>Hit Points:</h3>
            {/* <h4>Hit Die: {this.state.class.hit_die}</h4> */}
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