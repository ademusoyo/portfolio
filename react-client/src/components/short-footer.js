import React, { Component } from 'react';
import {Button} from 'reactstrap';
import linkedIn from '../images/LinkedIN.png';
import twitter from '../images/Twitter.png';
import mail from '../images/Mail.png'
import medium from '../images/Medium.png'
import github from '../images/Github.png'


class ShortFooter extends Component {
  render() {
    return (
      <div className="short-footer">
      <div className="footer-header">{"Let's Connect"}</div>
          <div className="contact-footer">
              <a href="mailto:ademusoyo@gmail.com" target="_blank"><img src={mail} alt="mail icon" /></a>
              <a href="https://www.linkedin.com/in/ademusoyo/" target="_blank"><img src={linkedIn} alt = "linkedIn icon"/></a>
              <a href="https://twitter.com/societyxtech" target="_blank"><img src={twitter} alt = "twitter icon"/></a>
              <a href="https://medium.com/@Ademusoyo" target="_blank"><img src={medium} alt = "medium icon"/></a>
              <a href="https://github.com/ademusoyo" target="_blank"><img src={github} alt = "github icon"/></a>
          </div>
          <div className="content-body">Copyright © 2019 | Designed and Developed by Ademusoyo Awosika-Olumo</div>
      </div>
    )
  }
}

export default ShortFooter;
