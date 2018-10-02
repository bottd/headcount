import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div>{this.props.location}</div>
    );
  }
}

export default Card;
