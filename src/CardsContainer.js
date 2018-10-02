import React from 'react';
import Card from './Card';

const CardsContainer = (props) => {
  const cards = props.stats.map( (place, index) => {
    return (<Card
      stats={place.stats}
      location={place.location}
      key={index}/>);
  });
  return (<div className='Cards'>{cards}</div>);
}

export default CardsContainer;
