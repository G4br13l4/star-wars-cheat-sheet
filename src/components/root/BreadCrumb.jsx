import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class BreadCrumb extends Component {
  render() {
    return (
        <div className="breadcrumb">
            <p>
              <span><Link to={this.props.link}>{this.props.category} </Link></span>
              <span onClick={this.props.returnPage}><a href="#">{this.props.prev}</a></span>
            </p>
        </div>
    );
  }
}

export default BreadCrumb;
