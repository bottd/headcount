import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.filterCards(this.state.search);
  }

  updateValue = (event) => {
    this.setState({search: event.target.value});
  }

  render() {
    return (
      // Search bar was working onKeyUp,
      // however it felt sluggish on the page, I changed to onSubmit
      <form onSubmit={this.handleSubmit}>
        <input
          //onKeyUp={this.handleSubmit}
          value={this.state.search}
          placeholder='Search by name'
          onChange={this.updateValue}
        />
        <button>Search</button>
      </form>
    );
  }
}

Search.propTypes = {
  filterCards: PropTypes.func
};

export default Search;
