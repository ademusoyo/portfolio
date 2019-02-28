import React, { Component } from 'react';
import {Button} from 'reactstrap';


class Footer extends Component {
  render() {
    return (
        <footer>
          <div className="indented-section">
          <div>
          <span className="footer-header">{"Let's Connect"}</span>
          </div>
          <div style={{maxWidth: "744px"}}>
          <span className="main-subText" style={{wordWrap: "break-word" }}>Want to collaborate? Want to discuss UX, Tech, or Anything  in Between? Let’s schedule some time to chat.</span>
          </div>
          <Button className="action-button" size="lg">Contact</Button>
          </div>
        </footer>
    )
  }
}

export default Footer;
