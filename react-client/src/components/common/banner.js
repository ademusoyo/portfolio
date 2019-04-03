import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import { slideInLeft, slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  slideInLeft: {
    animation: 'x 2s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  },
  slideInRight: {
    animation: 'x 2s',
    animationName: Radium.keyframes(slideInRight, 'slideInRight')
  }
};

class Banner extends Component {

  constructor(props){
    super(props);
    this.state = {
      backgroundColor: this.props.backgroundColor,
      headerText: this.props.headerText,
      subText: this.props.subText,
      image: this.props.image,
    }

  }

  render() {
    return (
      <div className={this.state.backgroundColor}>
        <Row>
        <div className="indented-section" id="header-section" style={{textAlign: "center"}}>
          <StyleRoot>
          <div className="main-headerText" style={styles.slideInLeft}>{this.state.headerText}</div>
          <div className="main-subText" style={styles.slideInRight}>{this.state.subText}</div>
          </StyleRoot>
        </div>
        </Row>
      </div>
    )
  }
}

export default Banner;
