import React, { Component } from 'react';
import Banner from '../common/Banner';
import {Card, Button, CardBody, Col, Row} from 'reactstrap';
import colorLogo from '../../images/color-wheel.png';
import Magneg from '../../images/magneg-card.png';
import Schedx from '../../images/schedx-card.png';
import NavBar from '../headerComponent/navBar';
import Footer from '../footerComponent/footer';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="main-content">
          <Banner backgroundColor="homepage-banner"
          headerText={"Hi. I'm Ademusoyo."}
          subText="Designer, Developer, STEM Advocate"
          image={colorLogo} id="homepage-header" />
              <div className="projects">
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                  <Link to="/magneg_case_study">
                  <div className="project">
                    <img className="project-image" src={Magneg} />
                  </div>
                  </Link>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                  <a href="https://medium.com/@Ademusoyo/personal-trainer-app-ux-ui-design-challenge-case-study-1af22c7bdb36" target="_blank">
                  <div className="project">
                    <img className="project-image" src={Schedx} />
                  </div>
                  </a>
                </Col>
              </div>
        </div>
      </div>
    )
  }
}

export default HomePage;
