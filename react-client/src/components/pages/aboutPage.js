import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle} from 'reactstrap';
import me from '../../images/me.png';
import NavBar from '../headerComponent/navBar';
import Footer from '../footerComponent/footer';
import { Link } from 'react-router-dom';
import BannerLink from '../common/BannerLink';
import Content from '../common/Content';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <BannerLink
          backgroundColor="about-banner"
          headerText="About Me."
          subText=""
          buttonText="View Resume"
          buttonLink="https://drive.google.com/file/d/1GbZrazttBnTpWZ1ZQxz2fSaVbXUg4j1A/view?usp=sharing" />
          <div className="main-content">
            <div className="indented-section">
            <Row>
            <Col xs="12" m="6" lg="6" xl="6">
             <img src={me} className="focal-image" style={{width: "50%"}} />
            </Col>
            <Col xs="12" m="6" lg="6" xl="6">
            <Content
              title="My Vision."
              content="I want to explore the use of different technology solutions and frameworks as well as different perspectives to continue developing my skillset both professionally  and personally that will allow me strategize, drive and manage changes within my current organization as well as encourage and influence positive, sustainable technological solutions."
            />
              <Content title="Why Design?"
                content="Design tells a story. It allows you to explore creatively while also developing an understanding of different cultures and the way the human mind works."
                  />
              <Content
                content="With design you have direct influence on how we can best create sustainable and impactful technologies. By designing applications that are accessible, encourage mindful best practices and are inclusive of all demographics, you’re decreasing the gap between those that don’t understand technology through accessibility." />

            </Col>
            </Row>
            </div>
        </div>
      </div>
    )
  }
}

export default AboutPage;
