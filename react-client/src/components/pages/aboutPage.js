import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle} from 'reactstrap';
import me from '../../images/me.png';
import NavBar from '../headerComponent/navBar';
import Footer from '../footerComponent/footer';
import { Link } from 'react-router-dom';
import BannerLink from '../common/bannerLink';
import Content from '../common/content';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <BannerLink
          backgroundColor="about-banner"
          headerText="About Me."
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
              title="Background."
              content="Ademusoyo primarily works  as a full stack developer in New York City. Outside of work, she focus on UX/UI Design, the COO and Co-Founder of MacScientists, and the Founder and Content Curator of Society x Tech. She graduated from the University of Pittsburgh with a Bachelor's of Science in Computer Engineering. She is always looking for a new skill to learn to make her a better professional as well as broaden her perspective."
            />
            <Content
              title="Vision."
              content="Her goal is  to explore the use of different technology solutions and frameworks as well as different perspectives to continue developing her skillset both professionally and personally. By increasing her knowledge and perspective, she hopes that it will allow her to strategize, drive and manage changes within her current organization as well as encourage and influence positive, sustainable technological solutions."
            />

            </Col>
            </Row>
            </div>
        </div>
      </div>
    )
  }
}

export default AboutPage;
