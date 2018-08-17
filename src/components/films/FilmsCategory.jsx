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
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
    .then(results => {
      return results.json();
    }).then(data =>{
      this.setState({rawData:data.results});
      // let array= data.results.map((item) => {
      //   return(
      //     <tr>
      //       <td>{item.gender}</td>
      //       <td>{item.name}</td>
      //       <td className="hide-col">{item.height}</td>
      //       <td className="hide-col">{item.mass}</td>
      //     </tr>
      //   )
      // })
      // this.setState({data:array});
      console.log(this.state)
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
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
          </div>
        </section>
    );
  }
}

export default FilmsCategory;
