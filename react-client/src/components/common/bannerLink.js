import React, { Component } from 'react';
import {Row, Col, Button} from 'reactstrap';

class BannerLink extends Component {

  constructor(props){
    super(props);
    this.state = {
      backgroundColor: this.props.backgroundColor,
      headerText: this.props.headerText,
      subText: this.props.subText,
      buttonText: this.props.buttonText,
      buttonLink: this.props.buttonLink,
    }

  }

  render() {
    return (
      <div className={this.state.backgroundColor}>
        <Row>
        <div className="indented-section" id="header-section">
          <div className="main-headerText">{this.state.headerText}</div>
          <div className="main-subText">{this.state.subText}</div>
          <a href={this.state.buttonLink} target="_blank">
            <Button className="action-button" size="lg" style={{marginBottom: "1.5em"}} id="banner-button">{this.state.buttonText}</Button>
          </a>
        </div>
        </Row>
      </div>
    )
  }
}

export default BannerLink;
