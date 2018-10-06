import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Card.css';
import './CompareContainer.css';

const CompareContainer = (props) => {
  let locations = [];
  let cards = props.stats.map(place => {
    locations.push(place.location);
    return (<Card
      stats={place.stats}
      location={place.location}
      key={Math.random()}/>);
  });
  const compare = props.compareDistrictAverages(...locations);
  let compareHeaders = Object.keys(compare).map(key => {
    return (<h3 key={Math.random()}>{`${key}: ${compare[key]}`}</h3>);
  });
  let compareCard = (<div
    className='DistrictData CompareCard'
    key={Math.random()}
  >{compareHeaders}</div>);

  cards = [cards[0], compareCard, cards.splice(1, 1)];

  return (
    <div className='Cards CompareContainer'>
      {cards}
    </div>);
};

CompareContainer.propTypes = {
  stats: PropTypes.object,
  compareDistrictAverages: PropTypes.func
};

export default CompareContainer;
