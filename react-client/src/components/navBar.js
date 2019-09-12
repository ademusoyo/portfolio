import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import logo2 from '../images/logo2.png'
import { slide as Menu, MenuWrap } from 'react-burger-menu'
import { HashLink } from 'react-router-hash-link';
import me from  '../images/me2.png';
import { Image, Container, Grid } from 'semantic-ui-react'
import linkedIn from '../images/LinkedIN.png';
import twitter from '../images/Twitter.png';
import mail from '../images/Mail.png'
import medium from '../images/Medium.png'
import github from '../images/Github.png'

class NavBar extends Component {
  render() {
    return (
        <Grid columns={1} className="side-nav">
          <Grid.Column>
          {/* <Link to="/">
          <Image src={logo2} className="logo-image" />
          </Link> */}
          <Menu right >
            <Image src={me} />
            <h4 className="hero-name-hamburger">
              Ademusoyo <br /> Awosika-Olumo
            </h4>
              <Link className="menu-link"to="/">Portfolio</Link>
              <Link className="menu-link"to="/about">About</Link> 
              <Link className="menu-link"to="/process">Design Process</Link> 
              <a href="https://calendly.com/ademusoyo" target="_blank" className="menu-link">Schedule a Call</a>
            <div className="social-row-hamburger">
              <a href="mailto:ademusoyo@gmail.com" target="_blank"><img src={mail} id="social-icon" alt="mail icon" /></a>
              <a href="https://www.linkedin.com/in/ademusoyo/" target="_blank"><img src={linkedIn} id="social-icon" alt = "linkedIn icon"/></a>
              <a href="https://twitter.com/ademusoyo" target="_blank"><img src={twitter} id="social-icon" alt= "twitter icon"/></a>
              <a href="https://medium.com/@Ademusoyo" target="_blank"><img src={medium} id="social-icon" alt = "medium icon"/></a>
              {/* <a href="https://github.com/ademusoyo" target="_blank"><img src={github} id="social-icon" alt = "github icon"/></a> */}
            </div>
          </Menu>
            <Image src={me} id="my-hero-image" />
            <h3 className="hero-name">
              Ademusoyo <br /> Awosika-Olumo
            </h3>
            <div className="navs" style={{textAlign: "center"}}>
              <Link className="nav-link"to="/">Portfolio</Link> <br />
              <Link className="nav-link"to="/about">About</Link> <br />
              <Link className="nav-link"to="/process">Design Process</Link> <br />
              <a href="https://calendly.com/ademusoyo" target="_blank" className="nav-link">Schedule a Call</a>
            </div>
            <div className="social-row">
              <a href="mailto:ademusoyo@gmail.com" target="_blank"><img src={mail} alt="mail icon" /></a>
              <a href="https://www.linkedin.com/in/ademusoyo/" target="_blank"><img src={linkedIn} alt = "linkedIn icon"/></a>
              <a href="https://twitter.com/ademusoyo" target="_blank"><img src={twitter} alt = "twitter icon"/></a>
              <a href="https://medium.com/@Ademusoyo" target="_blank"><img src={medium} alt = "medium icon"/></a>
              {/* <a href="https://github.com/ademusoyo" target="_blank"><img src={github} alt = "github icon"/></a> */}
            </div>
          </Grid.Column>
        </Grid>
    )
  }
}

export default NavBar;
