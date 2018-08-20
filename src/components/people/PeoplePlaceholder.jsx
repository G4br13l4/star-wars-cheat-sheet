import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CharCard  from '../root/CharCard';
import BreadCrumb  from '../root/BreadCrumb';

class PeoplePlaceholder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData:{},
      prevShow:"",
      show:"",
      style:"box-chars",
      char:""
    };
    this.showChar = this.showChar.bind(this);
  }

  componentDidMount() {
    this.showChars();
  }

  showChars(){
    fetch('https://swapi.co/api/people')
    .then(results => {
      return results.json();
    }).then(data =>{
      console.log(data.results)
      this.setState({rawData:data.results});
      const chars = this.state.rawData.map((char) => {
        return(
          <CharCard 
            showChar={this.showChar}            
            name={char.name}
            species={char.species}
            height={char.height}
            eyes={char.eye_color}
            hair={char.hair_color}
            gender={char.gender}
            birth={char.birth_year}
          />
        )
      }) 
      this.setState({show:chars});
    })
  }

  showChar(char){
    //this.setState({film: ` > ${film.props.title}`});
    this.setState({show:char});
    //this.setState({style:""});
    //this.setState({prevShow:film});
  }

  render() {
    return (
      <div>
        <BreadCrumb
            category="Films"
            link="/films"
            film={this.state.film}
            returnPage={this.returnPage}
        />
        <div className={this.state.style}>
            {this.state.show}
        </div>
      </div>
    );
  }
}

export default PeoplePlaceholder;