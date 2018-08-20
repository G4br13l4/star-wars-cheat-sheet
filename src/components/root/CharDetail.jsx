import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CharDetail extends Component {
  
  render() {
    return (
        <div>
            <h3><span className="bold">Name: </span>{this.props.name}</h3>
            <div className="box-details">
                <div className="small-details">
                    <p><span className="bold">Species: </span>{this.props.species}</p>
                    <p><span className="bold">Height: </span>{this.props.height}</p>
                    <p><span className="bold">Eye color: </span>{this.props.eyes}</p>
                    <p><span className="bold">Hair color: </span>{this.props.hair}</p>
                    <p><span className="bold">Gender: </span>{this.props.gender}</p>
                    <p><span className="bold">Birth year: </span>{this.props.birth}</p>
                </div>
            </div>
            <div className="related-details">
                <p><a href="#">Related Films</a></p>
                <p>Related Planets</p>
                <p>Related Starships</p>
                <p>Related Vehicles</p>
                <p>Related Species</p>
            </div> 
        </div>
    );
  }
}

export default CharDetail;