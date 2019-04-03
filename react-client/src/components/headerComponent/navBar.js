import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/logo.png'
import { slide as Menu, MenuWrap } from 'react-burger-menu'
import { HashLink } from 'react-router-hash-link';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      headerId: this.props.headerId
    };


  }

  render() {
    return (
      <div className={this.state.headerId}>
          <Menu right >
            <Link className="menu-link"to="/about">About</Link>
            <Link className="menu-link" to="/work">Work</Link>
            <a className="menu-link" href="https://mailchi.mp/02da2a5b2d98/societyxtech">Contact</a>
          </Menu>
          <ul id="headerButtons">
          <li className="navButton"><a className="nav-link" href="https://mailchi.mp/02da2a5b2d98/societyxtech" target="_blank">Subscribe</a></li>
            <li className="navButton"><Link className="nav-link" to="/work">Work</Link></li>
            <li className="navButton"><Link className="nav-link"to="/about">About</Link></li>


          </ul>
          <Link to="/">
            <img src={img} alt="My logo d e m u " className="logo-image"/>
          </Link>
      </div>
    )
  }
}

export default NavBar;
