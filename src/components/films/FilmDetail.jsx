import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FilmDetail extends Component {
  constructor(props) {
    super(props);
    this.getChar = this.getChar.bind(this);
  }
  
  getChar(){
    let urlsChar = this.props.characters;
    let arrayPromises = [];
    
    //putting responses/promises in array
    for (let i = 0; i < urlsChar.length; i++) {
        arrayPromises.push(fetch(urlsChar[i]).then(response => response.json()));
    }

    //obtaining values of promises
    Promise.all(arrayPromises).then(chars => { 
        this.props.showChar(chars); //calling parent method
    });   
    
  }
  
  render() {
    return (
        <div characters={this.props.characters} className="film-details">
            <h3><span className="bold">Title: </span>{this.props.title}</h3>
            <div className="box-details">
                <div className="small-details">
                    <p><span className="bold">Episode: </span>{this.props.episode}</p>
                    <p><span className="bold">Director: </span>{this.props.director}</p>
                    <p><span className="bold">Producer: </span>{this.props.producer}</p>
                    <p><span className="bold">Release Date: </span>{this.props.date}</p>
                </div>
                <div className="large-detail">
                    <p><span className="bold">Synopsis: </span>{this.props.synopsis}</p>
                </div>
            </div>
            <div className="related-details">
                <p onClick={this.getChar}>Related Characters</p>
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