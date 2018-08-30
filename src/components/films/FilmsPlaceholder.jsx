import React, { Component } from 'react';
import NavBar  from '../root/NavBar';
import Film  from './Film';
import Breadcrumb  from '../root/Breadcrumb';

class FilmsPlaceholder extends Component {
  constructor(props) {
    super(props);
    this.state= {
      show:"",
      first:"Films",
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
    this.createFilms();
  }

  createFilms(){
    fetch('https://swapi.co/api/films')
      .then(results => {
        return results.json();
      }).then(data =>{
        const templateFilms = data.results.map((film) => {
          return(
          <Film 
              title={film.title}
              episode={film.episode_id}
              date={film.release_date}
              director={film.director}
              producer={film.producer}
              synopsis={film.opening_crawl}
              chars={film.characters}
              showView={this.showView}
              addBread={this.addBread}
          />
          ); 
      }) 
      this.showView(templateFilms);
      this.setState({firstCnt:templateFilms}); //add for breadcrumb 
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

export default FilmsPlaceholder;
