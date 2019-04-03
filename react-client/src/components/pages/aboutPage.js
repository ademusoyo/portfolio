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
        <NavBar headerId="about-banner" />
        <BannerLink
          backgroundColor="about-banner"
          headerText="Thanks for stopping by!"
          subText="Let's get to know each other a little more."
          buttonText="View Resume"
          buttonLink="https://drive.google.com/file/d/1GbZrazttBnTpWZ1ZQxz2fSaVbXUg4j1A/view?usp=sharing"
          newWindow={true} />
          <div className="main-content" style={{marginLeft: "15%"}}>
            <Row className="section">
            <Col xs="12" m="6" lg="6" xl="6">
            <div className="content-header" style={{marginTop: "5%"}}>My Story </div>
            <div className="content-body" style={{marginTop: "5%", width: "80%"}}>Each part of my journey has shaped me into being the person that I am today.
              As I've gone through life, I have been able to step outside of my comfort zone and  have unlocked new interests and passions that
              have both challenged and motivated me to be a better version of myself.
              I am eager and hungry to learn more and make a positively lasting impact on my community working towards my goal of both honing in on my expertise and making an influence. </div>
            <div className="content-header" style={{marginTop: "5%"}}>Currently </div>
            <ul>
               <li className="bullet-item" >Full Stack Developer at Goldman Sachs</li>
               <li className="bullet-item" >Co-Founder and COO of <a className="nav-link" href="https://www.macscientists.com/" _target="blank">MacScientists</a></li>
               <li className="bullet-item" >Founder and Content Creator of <a className="nav-link" href="www.societyxtech.com" _target="blank">Society x Tech</a></li>
            </ul>
           </Col>
            <Col xs="12" m="6" lg="6" xl="6">
             <img src={me} className="focal-image"  />
             </Col>
            </Row>
        </div>
      </div>
    )
  }
}

export default AboutPage;
