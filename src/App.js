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
    };
  }

  componentDidMount() {
    this.filterCards('');
  }

  removeCompare = (location) => {
    const cardToKeep = this.state.compare.filter(card => {
      return card.location !== location;
    });
    this.setState({compare: cardToKeep});
  }

  filterCards = (search) => {
    const newStats = this.state.repository.findAllMatches(search);
    this.setState({stats: newStats});
  }

  compareCard = (card) => {
    let compare = [];
    compare.push(card);
    if (this.state.compare.length > 0) {
      compare.push(this.state.compare[0]);
    }
    this.setState({ compare });
  }

  render() {
    const { repository, compare, stats } = this.state;
    return (
      <div>
        <Search filterCards={this.filterCards}/>
        <CompareContainer
          compareDistrictAverages={repository.compareDistrictAverages}
          stats={compare}/>
        <CardsContainer
          removeCompare={this.removeCompare}
          compareCard={this.compareCard}
          stats={stats}/>
      </div>
    );
  }
}

export default App;
