import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import districtData from './data/kindergartners_in_full_day_program.js';
import Card from './Card';
import Search from './Search';

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
    const cards = this.state.stats.map( (place, index) => {
      return (<Card
        stats={place.stats}
        location={place.location}
        key={index}/>);
    });
    return (
      <div>
        <Search filterCards={this.filterCards}/>
        <div className='Cards'>
        { cards }
        </div>
      </div>
    );
  }
}

export default App;
