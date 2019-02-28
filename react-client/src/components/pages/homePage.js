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
      <div className="main-content">
        <Banner backgroundColor="homepage-banner"
        headerText={"Hi. I'm Ademusoyo."}
        subText="Software Developer, Product and Brand Strategist, UX/ UI Designer, STEM Advocate."
        image={colorLogo}
        includeContact={true} />
          <div className="indented-section">
            <span className="main-content-header">Projects: </span>
            <div className="projects">
              <Col xs="12" m="3" lg="3" xl="3">
                <Link to="">
                <Card className="project">
                  <img src={Magneg} />
                  <Button className="action-button" style={{marginLeft: "70px"}}> View Case Study </Button>
                </Card>
                </Link>
              </Col>
              <Col xs="12" m="3" lg="3" xl="3">
                <Link to="">
                <Card className="project">
                  <img src={Schedx} />
                </Card>
                </Link>
              </Col>
            </div>
          </div>
      </div>
    )
  }
}

export default HomePage;
