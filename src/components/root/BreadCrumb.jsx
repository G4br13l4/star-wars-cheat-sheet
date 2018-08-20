import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BreadCrumb extends Component {
  render() {
    return (
        <div className="breadcrumb bold">
            <p>
              <span onClick={this.props.returnCat}><a href="#">{this.props.prevCat}</a></span>
              <span onClick={this.props.returnItem}><a href="#">{this.props.prevItem}</a></span>
            </p>
        </div>
    );
  }
}

export default BreadCrumb;
