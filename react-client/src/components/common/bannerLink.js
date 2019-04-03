import React, { Component } from 'react';
import {Row, Col, Button} from 'reactstrap';
import { slideInLeft, slideInRight, fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  slideInLeft: {
    animation: 'x 2s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  },
  slideInRight: {
    animation: 'x 2s',
    animationName: Radium.keyframes(slideInRight, 'slideInRight')
  },
  fadeIn: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
};

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
        <div className="indented-section" id="about-header" style={{textAlign: "center"}}>
          <StyleRoot>
            <div className="main-headerText" style={styles.slideInLeft}>{this.state.headerText}</div>
            <div className="main-subText" style={styles.slideInRight}>{this.state.subText}</div>
          <a href={this.state.buttonLink} target="_blank" style={styles.fadeIn}>
            <Button className="action-button" size="lg" style={{marginBottom: "1.5em"}} id="banner-button">{this.state.buttonText}</Button>
          </a>
          </StyleRoot>
        </div>
        </Row>
      </div>
    )
  }
}

export default BannerLink;
