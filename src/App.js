import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import districtData from './data/kindergartners_in_full_day_program.js';
import Card from './Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repository: new DistrictRepository(districtData)
    }
  }

  render() {
    const locations = Object.keys(this.state.repository.stats);
    const cards = locations.map( (place, index) => {
      return (<Card
        stats={this.state.repository.stats[place]}
        location={place}
        key={index}/>);
    });
    return (
      <div className='Cards'>
      { cards }
      </div>
    );
  }
}

export default App;
