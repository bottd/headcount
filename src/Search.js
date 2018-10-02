import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.filterCards(this.state.search);
  }

  updateValue = (e) => {
    this.setState({search: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.search}
          placeholder='Search by name'
          onChange={this.updateValue}
        />
        <button>Search</button>
      </form>
    )
  }
}

export default Search;
