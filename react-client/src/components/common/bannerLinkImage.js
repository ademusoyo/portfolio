import React, { Component } from 'react';
import {Row, Col, Button} from 'reactstrap';
import { bounceInDown, fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Bounce from 'react-reveal/Bounce';

const styles = {
  bounceInDown: {
    animation: 'x 3s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  },
  fadeIn: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
};

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
      image: this.props.image,
      imageId: this.props.imageId,
      newWindow: this.props.newWindow
    }

  }

  render() {
    return (
      <div className={this.state.backgroundColor}>
          <Row>
            <Col xs="12" m="6" lg="6" xl="6">
              <div className="indented-section" id="header-section">
                  <StyleRoot>
                  <div style={styles.bounceInDown}>
                    <div className="main-headerText">{this.state.headerText}</div>
                    <div className="main-subText">{this.state.subText}</div>
                    <div className="main-subText" style={{marginTop: "1.5em"}}>{this.state.role}</div>
                    {
                      this.state.newWindow &&
                      <a href={this.state.buttonLink} target="_blank">
                        <Button className="action-button" size="lg"  id="banner-button-2" style={{marginBottom: "1.5em"}}>{this.state.buttonText}</Button>
                      </a>
                    }
                    {
                      !this.state.newWindow&&
                      <a href={this.state.buttonLink}>
                        <Button className="action-button" size="lg"  id="banner-button-2" style={{marginBottom: "1.5em"}}>{this.state.buttonText}</Button>
                      </a>
                    }
                  </div>
                  </StyleRoot>
                </div>
            </Col>
            <Col xs="12" m="6" lg="6" xl="6">
              <StyleRoot>
              <div style={styles.fadeIn}>
              <img src={this.state.image} className="banner-link-image" id={this.state.imageId} />
              </div>
              </StyleRoot>
            </Col>
          </Row>
      </div>
    )
  }
}

export default BannerLinkImage;
