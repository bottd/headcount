import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardsContainer = (props) => {
  const cards = props.stats.map( (place, index) => {
    return (<Card
      removeCompare={props.removeCompare}
      stats={place.stats}
      location={place.location}
      compareCard={props.compareCard}
      key={index}/>);
  });
  return (<div className='Cards'>{cards}</div>);
};

CardsContainer.propTypes = {
  removeCompare: PropTypes.func,
  compareCard: PropTypes.func,
  stats: PropTypes.array
};

export default CardsContainer;
