import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CharCard extends Component {
  
  render() {
    return (
        <div className="charcard">
            <h4>{this.props.name}</h4>
        </div>
    );
  }
}

export default CharCard;