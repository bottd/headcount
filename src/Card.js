import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  selectCard = () => {
    if (this.state.selected) {
      this.props.removeCompare(this.props.location);
    } else {
    this.props.compareCard({
      location: this.props.location,
      stats: this.props.stats});
    }
    this.setState({selected: !this.state.selected});
  }

  render() {
    const yearData = Object.keys(this.props.stats).map((year, index) => {
      const percentage = this.props.stats[year];
      let status, arrow;
      if (percentage < 0.5) {
        arrow = 'fa-caret-down';
      } else {
        arrow = 'fa-caret-up';
      }
      return(<li key={index} className={status}>
        <i className={`fas ${arrow}`}></i>
        <span className='year'>{year}: </span>
        <span className='yearValue'>{percentage}</span>
      </li>);
    });
    let className = 'DistrictData';
    if (this.state.selected) className += ' selected';
    return (
      <div className={className} onClick={this.selectCard}>
        <h3>{this.props.location}</h3>
        <ul className='yearData'>
          {yearData}
        </ul>
      </div>
    );
  }
}

Card.propTypes = {
  stats: PropTypes.object,
  location: PropTypes.string
}

export default Card;
