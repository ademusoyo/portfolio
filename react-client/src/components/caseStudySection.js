import React, { Component } from 'react';
import {Button, CardBody, Col, Row, CardTitle} from 'reactstrap';
import { fadeIn, slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { Grid, Image, Card } from 'semantic-ui-react'

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

export const CaseStudySection  = ({projectName, projectDescription, caseStudyLink, image}) => {
    return (
      <div className="case-study-section">
            <Col xs="12" sm="12" m="6" lg="6" xl="6" >
              <img src={image} id="case-study-image" />
            </Col>
            <Col xs="12" sm="12" m="5" lg="5" xl="5" style={{paddingLeft: "10%"}}>
            <div className="content-header" id="case-study-header">{projectName}</div>
            <div className="content-body" id="case-study-description">
              {projectDescription}
            </div>
            <div>
              <a href={caseStudyLink}>
                <Button className="action-button" size="md" style={{marginTop: "0em"}} id="case-study-button">View Case Study</Button>
              </a>
            </div>
            </Col>
      </div>
    );
};
