import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar  from '../root/NavBar';

class StarshipsCategory extends Component {
  render() {
    return (
        <section>
            <NavBar/>
            <div className="empty">
              <p>Very soon you will see the data of Starships</p>
            </div>
        </section>
    );
  }
}

export default StarshipsCategory;
