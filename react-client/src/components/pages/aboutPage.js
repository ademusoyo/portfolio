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
          subText="Learning and growing each and every day."
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
            <Content
              title="How Everything Fits In."
              content="Ademusoyo is a multi-hyphenate person and she wouldn't have it any other way. Each piece of her story represents each of her passions that she has gotten to explore and dive deep into to paint a bigger picture. She loves being a developer and being able to see how technology comes together from the front-end to the backend. She has a passion for design because it allows her to express her creativity and understand more of how people think. She enjoys blogging and and curating content because it gives her a platform to share her story and her interests in hopes of inspiring other people. Together, this makes her her and that's what keeps her going."
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
