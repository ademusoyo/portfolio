import React, { Component } from 'react';
import {CaseStudySection} from '../components/caseStudySection';
import {Button, CardBody, Col, Row} from 'reactstrap';
import { Grid, Image, Card, Container } from 'semantic-ui-react'
import colorLogo from '../images/color-wheel.png';
import { Link } from 'react-router-dom';
import me from  '../images/me2.png';
import magnegHome from '../images/magneg/homepage.png'
import travelixHome from '../images/travelix/homepage.png'



class HomePage extends Component {
  render() {
    return (
      <div>
        <Container textAlign="center">
          <Image src={me} id="my-hero-image" />
          <div className="main-headerText" id="homepage-header-text">Hi. I'm <span className="emphasis"> Ademusoyo. </span></div>
          <div className="main-subText" id="homepage-header-sub-text">I'm a <span className="emphasis">software engineer</span> and <span className="emphasis">designer</span> based in <span className="emphasis">NYC.</span>
              <br /> I'm passionate about designing and developing <span className="emphasis">socially conscious</span> solutions.</div>
        </Container>
        <Container textAlign="center">
            <div className="main-subText" id="recent-projects"> Recent Projects </div>
        </Container>
        <Grid className="main-content">
        <Row>

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
