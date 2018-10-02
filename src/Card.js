import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    const yearData = Object.keys(this.props.stats).map((year, index) => {
      const percentage = this.props.stats[year];
      let status, arrow;
      if (percentage < 0.5) {
        status = 'lessThan';
        arrow = 'fa-caret-down';
      } else {
        status = 'greater';
        arrow = 'fa-caret-up';
      }
      return(<li key={index} className={status}>
        <i class={`fas ${arrow}`}></i>
        <span className='year'>{year}: </span>
        <span className='yearValue'>{percentage}</span>
      </li>);
    });
    return (
      <div className='DistrictData'>
        <h3>{this.props.location}</h3>
        <ul className='yearData'>
          {yearData}
        </ul>
      </div>
    );
  }
}

export default Card;
