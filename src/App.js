import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import districtData from './data/kindergartners_in_full_day_program.js';
import Search from './Search';
import CardsContainer from './CardsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repository: new DistrictRepository(districtData),
      stats: []
    }
  }

  componentDidMount() {
    this.filterCards('');
  }

  filterCards = (search) => {
    const newStats = this.state.repository.findAllMatches(search);
    this.setState({stats: newStats});
  }

  render() {
    return (
      <div>
        <Search filterCards={this.filterCards}/>
        <CardsContainer stats={this.state.stats}/>
      </div>
    );
  }
}

export default App;
