import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../images/logo.png'
import { slide as Menu, MenuWrap } from 'react-burger-menu'
import { HashLink } from 'react-router-hash-link';

class NavBar extends Component {
  render() {
    return (
      <header>
          <Menu right >
            <Link className="menu-link"to="/about">About</Link>
            <a className="menu-link" href="https://calendly.com/ademusoyo">Let's Chat</a>
          </Menu>
          <ul id="headerButtons">
          <li className="navButton"><a className="nav-link" href="https://calendly.com/ademusoyo" target="_blank">Let's Chat</a></li>
          <li className="navButton"><Link className="nav-link"to="/about">About</Link></li>
          </ul>
          <Link to="/">
            <img src={img} alt="My logo d e m u " className="logo-image"/>
          </Link>
      </header>
    )
  }
}

export default NavBar;
