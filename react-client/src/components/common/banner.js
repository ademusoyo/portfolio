import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import linkedIn from '../../images/LinkedIN.png';
import twitter from '../../images/Twitter.png';
import mail from '../../images/Mail.png'
import medium from '../../images/Medium.png'
import github from '../../images/Github.png'

class Banner extends Component {

  constructor(props){
    super(props);
    this.state = {
      backgroundColor: this.props.backgroundColor,
      headerText: this.props.headerText,
      subText: this.props.subText,
      image: this.props.image,
      includeContact: this.props.includeContact
    }

  }

  render() {
    return (
      <div className={this.state.backgroundColor}>
        <Row>
        <Col xs="12" m="6" lg="6" xl="6">
        <div className="indented-section">
          <div className="main-headerText">{this.state.headerText}</div>
          <div className="main-subText">{this.state.subText}</div>
          {
            this.state.includeContact &&
            <div className="contact-footer">
                <a href="mailto:ademusoyo@gmail.com"><img src={mail} alt = "mail icon"/></a>
                <a href="https://www.linkedin.com/in/ademusoyo/"><img src={linkedIn} alt = "linkedIn icon"/></a>
                <a href="https://twitter.com/societyxtech"><img src={twitter} alt = "twitter icon"/></a>
                <a href="https://medium.com/@Ademusoyo"><img src={medium} alt = "medium icon"/></a>
                <a href="https://github.com/ademusoyo"><img src={github} alt = "medium icon"/></a>
            </div>
          }
        </div>
        </Col>
        <Col xs="12" m="6" lg="6" xl="6">
          <img src={this.state.image} alt="4 circles in a square" className="banner-image"/>
        </Col>
        </Row>
      </div>
    )
  }
}

export default Banner;
