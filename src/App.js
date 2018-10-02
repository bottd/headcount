import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import districtData from './data/kindergartners_in_full_day_program.js';
import Search from './Search';
import CardsContainer from './CardsContainer';
import CompareContainer from './CompareContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repository: new DistrictRepository(districtData),
      stats: [],
      compare: []
    }
  }

  componentDidMount() {
    this.filterCards('');
  }

  filterCards = (search) => {
    const newStats = this.state.repository.findAllMatches(search);
    this.setState({stats: newStats});
  }

  compareCard = (card) => {
    if (this.state.compare.length >=2) {
      this.state.compare.slice(1,2);
    }
    this.setState({ compare: [...this.state.compare, card] });
  }

  render() {
    return (
      <div>
        <Search filterCards={this.filterCards}/>
        <CompareContainer
          getAvg={this.state.repository.getAvg}
          stats={this.state.compare}/>
        <CardsContainer
          compareCard={this.compareCard}
          stats={this.state.stats}/>
      </div>
    );
  }
}

export default App;
