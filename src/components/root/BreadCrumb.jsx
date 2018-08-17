import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BreadCrumb extends Component {

  render() {
    return (
        <div>
            <p><span>{this.props.category}</span> > <span>Detail</span></p>
        </div>
    );
  }
}

export default BreadCrumb;
