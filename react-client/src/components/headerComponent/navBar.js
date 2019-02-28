import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/logo.png'

class NavBar extends Component {
  render() {

    return (
      <header>
        <ul id="headerButtons">
        <img src={img} alt="My logo d e m u "/>
          <li className="navButton"><Link to="" className="nav-link">Contact</Link></li>
          <li className="navButton"><Link to="" className="nav-link">About</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
