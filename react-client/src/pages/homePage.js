import React, { Component } from 'react';
import {CaseStudySection} from '../components/caseStudySection';
import {Button, CardBody, Col, Row} from 'reactstrap';
import { Grid, Image, Card } from 'semantic-ui-react'
import colorLogo from '../images/color-wheel.png';
import { Link } from 'react-router-dom';
import me from  '../images/me2.png';
import magnegHome from '../images/magneg/homepage.png'
import travelixHome from '../images/travelix/homepage.png'



class HomePage extends Component {
  render() {
    return (
      <div>
        <Grid className="main-content">
        <Row>
        <Col xs="12" m="12" lg="12" xl="12">
        <Col xs="12" m="12" lg="12" xl="12">
          <div className="indented-section" id="header-section" style={{textAlign: "center"}}>
              <img src={me} className="banner-link-image" id="my-hero-image" />
          </div>
        </Col>
          <div className="indented-section" id="header-section">
                <div className="main-headerText" id="homepage-header-text">Hi. I'm <span className="emphasis"> Ademusoyo. </span></div>
                <div className="main-subText" id="homepage-header-sub-text">I'm a <span className="emphasis">software engineer</span> and <span className="emphasis">designer</span> based in NYC.
                    <br /> I'm passionate about designing and developing <span className="emphasis">socially conscious</span> solutions.</div>
          </div>
        </Col>
        </Row>
        <Row>
          <div className="main-subText" id="recent-projects" style={{marginLeft: "16%"}}> Recent Projects </div>
          <Col xs="6" m="6" lg="6" xl="6">
          <CaseStudySection projectName="Travelix"
            projectDescription="A new mobile application that empowers you to discover new places and dream up your next travel destination."
            caseStudyLink="/travelix"
            image={travelixHome}
          />
          </Col>
          <Col xs="6" m="6" lg="6" xl="6" className="closer">
          <CaseStudySection projectName="Magneg"
            projectDescription="A new cloud storage mobile application that allows users to create, store and collaborate all in one platform."
            caseStudyLink="/magneg"
            image={magnegHome}
          />
          </Col>
        </Row>
        </Grid>
      </div>
    )
  }
}

export default HomePage;
