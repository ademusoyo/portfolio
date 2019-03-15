import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/logo.png'
import { slide as Menu, MenuWrap } from 'react-burger-menu'
import { HashLink } from 'react-router-hash-link';

class NavBar extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <header>
          <Menu className="header-menu"  right >
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="recent-case-study" className="menu-item" href="/magneg_case_study"> View Recent Case Study </a>
          </Menu>
          <Link to="/">
            <img src={img} alt="My logo d e m u " style={{ position: "relative", marginLeft: "4em", bottom: "20px"}} className="logo-image"/>
          </Link>
      </header>
    )
  }
}

export default NavBar;
