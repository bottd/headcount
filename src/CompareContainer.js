import React, { Component } from 'react';
import Card from './Card';

const CompareContainer = (props) => {
  let locations = [];
  let cards = props.stats.map((place, index) => {
    locations.push(place.location);
    return (<Card
      className='selected'
      stats={place.stats}
      location={place.location}
      key={index}/>);
  });
  const compare = props.compareDistrictAverages(...locations);
  const compareCard = Object.keys(compare).map(key => {
    return (<h3>{`${key}: ${compare[key]}`}</h3>)
  });

    return (
      <div>
        <div> {compareCard} </div>
        {cards}
      </div>);
}

export default CompareContainer;
