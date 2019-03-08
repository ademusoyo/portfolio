import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/logo.png'
import { slide as Menu, MenuWrap } from 'react-burger-menu'

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
            <a id="contact" className="menu-item" href="mailto:ademusoyo@gmail.com">Contact</a>
          </Menu>
          <Link to="/">
            <img src={img} alt="My logo d e m u " style={{ position: "relative", marginLeft: "2em", bottom: "20px"}} className="logo-image"/>
          </Link>
      </header>
    )
  }
}

export default NavBar;
