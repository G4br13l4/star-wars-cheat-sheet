import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CharDetail  from './CharDetail';

class CharCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specie:""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    
    fetch(`${this.props.species}`)
        .then(results => {
          return results.json();
        }).then(data =>{
          let char = (
            <CharDetail            
              name={this.props.name}
              species={data.name}
              height={this.props.height}
              eyes={this.props.eyes}
              hair={this.props.hair}
              gender={this.props.gender}
              birth={this.props.birth}
              films={this.props.films}
              showFilm={this.props.showFilm}
            />
          );
          this.props.showChar(char);
        })
  }
  
  render() {
    return (
        <div onClick={this.handleClick} className="charcard">
            <h4>{this.props.name}</h4>
        </div>
    );
  }
}

export default CharCard;