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
        <Col xs="12" m="6" lg="6" xl="6">
          <div className="indented-section" id="header-section">
                <div className="main-headerText">Hi. I'm <span className="emphasis"> Ademusoyo. </span></div>
                <div className="main-subText">I'm a <span className="emphasis">software engineer</span> and <span className="emphasis">designer</span> based in NYC.
                    I'm passionate about creating <span className="emphasis">positively impactful</span> products and experiences.</div>
          </div>
        </Col>
        <Col xs="12" m="6" lg="6" xl="6">
          <div className="indented-section" id="header-section">
              <img src={me} className="banner-link-image" id="my-hero-image" />
          </div>
        </Col>
        </Row>
        <Row>
          <div className="main-subText" id="section-header" style={{marginLeft: "13%"}}> Recent Projects </div>
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
