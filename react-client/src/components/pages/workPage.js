import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle} from 'reactstrap';
import NavBar from '../headerComponent/navBar';
import Footer from '../footerComponent/footer';
import { Link } from 'react-router-dom';
import Banner from '../common/banner';
import Content from '../common/content';
import CaseStudySection from '../common/caseStudySection';
import CaseStudySectionReverse from '../common/caseStudySectionReverse';
import magnegIphone from '../../images/magneg-portfolio.png';
import schedxIphone from '../../images/schedx-portfolio.png';
import { slideInRight, slideInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  slideInRight: {
    animation: 'x 2s',
    animationName: Radium.keyframes(slideInRight, 'slideInRight')
  },
  slideInLeft: {
    animation: 'x 2s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  }
};

class WorkPage extends Component {
  render() {
    return (
      <div>
        <NavBar headerId="work-banner" />
        <Banner
          backgroundColor="work-banner"
          headerText="Recent Projects"
          subText="" />
          <StyleRoot>
          <div style={styles.slideInRight}>
            <CaseStudySection projectName="Magneg"
              projectDescription="A new cloud storage mobile application that allows users to create, store and collaborate all in one platform."
              caseStudyLink="/magneg"
              image={magnegIphone}
            />
            </div>
          </StyleRoot>
      </div>
    )
  }
}

export default WorkPage;
