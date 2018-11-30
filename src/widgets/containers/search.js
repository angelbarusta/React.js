import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
  state = {
    value: '¿Qué es AZ-Tech?'
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.input.value, 'submit')

  }
  setInputRef = element => {
    this.input = element;
  }
  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-')//re,plazamos el espacio por guines
    })
  }
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

export default SearchContainer;