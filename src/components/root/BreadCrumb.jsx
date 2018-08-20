import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BreadCrumb extends Component {
  render() {
    return (
        <div className="breadcrumb">
            <p>
              <span><a href={this.props.link}>{this.props.category} </a></span>
              <span onClick={this.props.returnPage}><a href="#">{this.props.prev}</a></span>
            </p>
        </div>
    );
  }
}

export default BreadCrumb;
