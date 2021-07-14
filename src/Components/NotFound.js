import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NotFound extends Component{
  /**
   * when this component renders let app.js know 
   */
  componentDidMount(){
    this.props.display(true);
  }
  /**
   * when this component is unmouting let app.js know to show nav and searh
   */
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
