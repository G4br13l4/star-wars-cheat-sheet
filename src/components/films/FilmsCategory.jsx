import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar  from '../root/NavBar';
import BreadCrumb  from '../root/BreadCrumb';
import FilmCard  from './FilmCard';

class FilmsCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData:{},
      showData:[],      
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films')
    .then(results => {
      return results.json();
    }).then(data =>{
      
      this.setState({rawData:data.results});
      const films = this.state.rawData.map((film) => {
        return(
          <FilmCard
            title={film.title}
            episode={film.episode_id}
            date = {film.release_date}
          />
        )
      })    
      this.setState({showData:films});
      console.log(this.state.showData)
    })
  }
  
  render() {
    return (
        <section>
          <NavBar/>
          <BreadCrumb
            category="Films"
          />
          <div className="h-center">
            {this.state.showData}
          </div>
        </section>
    );
  }
}

export default FilmsCategory;
