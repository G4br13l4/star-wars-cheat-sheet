import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FilmDetail extends Component {
  constructor(props) {
    super(props);
    this.getCharacters = this.getCharacters.bind(this);
  }
  
  getCharacters(){
    console.log(this.props.characters)
  }
  
  render() {
    return (
        <div>
            <h3><span className="bold">Title: </span>{this.props.title}</h3>
            <p><span className="bold">Episode: </span>{this.props.episode}</p>
            <p><span className="bold">Director: </span>{this.props.director}</p>
            <p><span className="bold">Producer: </span>{this.props.producer}</p>
            <p><span className="bold">Release Date: </span>{this.props.date}</p>

            <div>
                <p onClick={this.getCharacters} characters={this.props.characters}>Related Characters</p>
                <p>Related Planets</p>
                <p>Related Starships</p>
                <p>Related Vehicles</p>
                <p>Related Species</p>
            </div>
        </div>
    );
  }
}

export default FilmDetail;