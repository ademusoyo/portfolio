import React, { Component } from 'react';
import Banner from '../common/banner';
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
          subText="A software developer, UX/UI designer, and content creator based in New York City."
          image={colorLogo} id="homepage-header" />
          <div className="content-header" style={{textAlign: "center", textDecoration: "underline"}}>Case Studies</div>
              <div className="projects" id="caseStudies">
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                  <Link to="/magneg_case_study">
                  <div className="project">
                    <img className="project-image" src={Magneg} />
                  </div>
                  </Link>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                  <Link to="/schedx_case_study">
                  <div className="project">
                    <img className="project-image" src={Schedx} />
                  </div>
                  </Link>
                </Col>
              </div>
        </div>
      </div>
    )
  }
}

export default HomePage;
