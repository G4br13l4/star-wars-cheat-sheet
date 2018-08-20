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
  }

  componentDidMount() {
    this.showChars();
  }

  showChars(){
    fetch('https://swapi.co/api/people')
    .then(results => {
      return results.json();
    }).then(data =>{
      this.setState({rawData:data.results});
      const chars = this.state.rawData.map((char) => {
        return(
          <CharCard
            name={char.name}
          />

        )
      }) 
      this.setState({show:chars});
    })
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