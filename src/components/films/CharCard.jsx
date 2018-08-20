import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CharCard extends Component {
  
  render() {
    return (
        <div>
            <h3>{this.props.name}</h3>
        </div>
    );
  }
}

export default CharCard;