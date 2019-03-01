import React, { Component } from 'react';
import {Button} from 'reactstrap';
import linkedIn from '../../images/LinkedIN.png';
import twitter from '../../images/Twitter.png';
import mail from '../../images/Mail.png'
import medium from '../../images/Medium.png'
import github from '../../images/Github.png'


class Footer extends Component {
  render() {
    return (
        <footer>
          <div className="indented-section">
          <div>
          <span className="footer-header">{"Let's Connect"}</span>
          </div>
          <div style={{maxWidth: "744px"}}>
          <span className="main-subText" style={{wordWrap: "break-word" }}>Are you interested in working together? Want to discuss UX, Tech, or anything in between? Email me so we can discuss.</span>
          </div>
          <a href="mailto:ademusoyo@gmail.com">
          <Button className="action-button" size="lg">Email Me</Button>
          </a>
          <div className="contact-footer">
              <a href="https://www.linkedin.com/in/ademusoyo/" target="_blank"><img src={linkedIn} alt = "linkedIn icon"/></a>
              <a href="https://twitter.com/societyxtech" target="_blank"><img src={twitter} alt = "twitter icon"/></a>
              <a href="https://medium.com/@Ademusoyo" target="_blank"><img src={medium} alt = "medium icon"/></a>
              <a href="https://github.com/ademusoyo" target="_blank"><img src={github} alt = "medium icon"/></a>
          </div>
          </div>
        </footer>
    )
  }
}

export default Footer;
