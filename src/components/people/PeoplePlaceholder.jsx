import React, { Component } from 'react';
import NavBar  from '../root/NavBar';
import Char  from './Char';
import Breadcrumb  from '../root/Breadcrumb';

class PeoplePlaceholder extends Component {
  constructor(props) {
    super(props);
    this.state= {
      show:"",
      first:"People",
      firstCnt:"",
      second: "",
      secondCnt:"",
      third:"",
      thirdCnt:"",
      fourth:"",
      fourthCnt:""
    };
    this.showView = this.showView.bind(this);
    this.addBread = this.addBread.bind(this);
    this.showBread = this.showBread.bind(this);
  }

  componentDidMount() {
    this.createChars();
  }

  createChars(){
    fetch('https://swapi.co/api/people')
    .then(results => {
      return results.json();
    }).then(data =>{
      const templateChars = data.results.map((char) => { 
        return(
          <Char           
            name={char.name}
            type={char.species}
            height={char.height}
            eyes={char.eye_color}
            hair={char.hair_color}
            gender={char.gender}
            birthday={char.birth_year}
            films={char.films}
            showView={this.showView}
            addBread={this.addBread}
          />
        )
      })
      this.showView(templateChars); 
      this.setState({firstCnt:templateChars}); //add for breadcrumb
    })
  }

  showView(view){
    this.setState({show:view});
  }

  addBread( place, viewName, viewCnt){
    switch(place) {
      case "second":
          this.setState({second:`  >  ${viewName}`});
          this.setState({secondCnt:viewCnt});
          break;
      case "third":
          this.setState({third:`  >  ${viewName}`});
          this.setState({thirdCnt:viewCnt});
          break;
      case "fourth":
          this.setState({fourth:`  >  ${viewName}`});
          break;
      default:
          break;
    }
  }

  showBread(e){
    let place =e.target.dataset.place;
    
    switch(place) {
      case "first":
          this.setState({show: this.state.firstCnt});
          this.setState({second:""});
          this.setState({third:""});
          this.setState({fourth:""});
          break;
      case "second":
          this.setState({show: this.state.secondCnt});
          this.setState({third:""});
          this.setState({fourth:""});
          break;
      case "third":
          this.setState({show: this.state.thirdCnt});
          this.setState({fourth:""});
          break;
      default:
          break;
    }
  }

  render() {
    return (
        <section>
            <NavBar/>
            <Breadcrumb
              first={this.state.first}
              second={this.state.second}
              third={this.state.third}
              fourth={this.state.fourth}
              showBread={this.showBread}
            /> 
            <div className="placeholder">
              {this.state.show}
            </div>
        </section>
    );
  }
}

export default PeoplePlaceholder;