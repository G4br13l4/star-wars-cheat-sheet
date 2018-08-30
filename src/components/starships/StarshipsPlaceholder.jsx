import React, { Component } from 'react';
import NavBar  from '../root/NavBar';

class StarshipsPlaceholder extends Component {
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

export default StarshipsPlaceholder;
