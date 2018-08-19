import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BreadCrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film:""
    };
  }

  change(){

  }

  render() {
    return (
        <div>
            <p><span><a>{this.props.category}</a></span> > <span>{this.state.film}</span></p>
        </div>
    );
  }
}

export default BreadCrumb;
