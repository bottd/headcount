import React, { Component } from 'react';
import Card from './Card';

const CompareContainer = (props) => {
  const avgs = [];
  const cards = props.stats.map((place, index) => {
    let avg = props.getAvg('COLORADO');
//    return (<Card
//      className='selected'
//      stats={place.stats}
//      location={place.location}
//      key={index}/>);
  });
    return (
      <div className='comparison'>
        {cards}
        <div className='DistrictData selected'>
        </div>
      </div>);
}

export default CompareContainer;
