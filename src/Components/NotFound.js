import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NotFound extends Component{
  componentDidMount(){
    this.props.display(true);
  }
  componentWillUnmount(){
    this.props.display(false);
  }
  render(){
    return (
      <div>
        <p>Page Not Found.</p>
        <Link to={"/"}>
        <button type="button" className="search-button">Home</button>
        </Link>
      </div>
    );
  }
}

export default NotFound;
