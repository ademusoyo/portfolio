import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/logo.png'

class NavBar extends Component {
  constructor(props){
    super(props);

  }

  render() {

    return (
      <header>
        <ul id="headerButtons">
        <Link to="/" >
        <img src={img} alt="My logo d e m u " style={{marginLeft: "2em"}}/>
        </Link>
          <li className="navButton"><Link to="/about" className="nav-link">About Me</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
