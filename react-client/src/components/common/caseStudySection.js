import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle} from 'reactstrap';
import { fadeIn, slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  fadeIn: {
    animation: 'x 10s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
  slideInRight: {
    animation: 'x 2s',
    animationName: Radium.keyframes(slideInRight, 'slideInRight'),
    animationDelay: '1000'
  }
}

class CaseStudySection extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="case-study-section" style={styles.slideInRight}>
            <Col xs="12" m="6" lg="6" xl="6">
              <img src={this.props.image} className="banner-link-image"/>
            </Col>
            <Col xs="12" m="6" lg="6" xl="6">
            <div className="content-header">{this.props.projectName}</div>
            <div className="content-body" style={{width: "80%"}}>
              {this.props.projectDescription}
            </div>
            <div>
              <a href={this.props.caseStudyLink}>
                <Button className="action-button" size="md" style={{marginTop: "0em"}}>View Case Study</Button>
              </a>
            </div>
            </Col>
      </div>
    )
  }
}

export default CaseStudySection;
