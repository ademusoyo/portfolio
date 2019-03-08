import React, { Component } from 'react';
import {Row, Col, Button} from 'reactstrap';

class BannerLinkImage extends Component {

  constructor(props){
    super(props);
    this.state = {
      backgroundColor: this.props.backgroundColor,
      headerText: this.props.headerText,
      subText: this.props.subText,
      role: this.props.role,
      buttonText: this.props.buttonText,
      buttonLink: this.props.buttonLink,
      image: this.props.image
    }

  }

  render() {
    return (
      <div className={this.state.backgroundColor}>
        <Row>
        <Col xs="12" m="6" lg="6" xl="6">
        <div className="indented-section" id="header-section">
          <div className="main-headerText">{this.state.headerText}</div>
          <div className="main-subText">{this.state.subText}</div>
          <div className="main-subText" style={{marginTop: "1.5em"}}>{this.state.role}</div>
          <a href={this.state.buttonLink} target="_blank">
            <Button className="action-button" size="lg"  id="banner-button" style={{marginBottom: "1.5em"}}>{this.state.buttonText}</Button>
          </a>
        </div>
        </Col>
        <Col xs="12" m="6" lg="6" xl="6">
          <img src={this.state.image} className="banner-link-image" />
        </Col>
        </Row>
      </div>
    )
  }
}

export default BannerLinkImage;
