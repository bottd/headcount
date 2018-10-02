import React, { Component } from 'react';

class Card extends Component {
  render() {
    console.log(this.props.stats);
    return (
      <div>{this.props.location}</div>
    );
  }
}

export default Card;
