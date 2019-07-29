import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle} from 'reactstrap';
import aboutMe from '../images/about-me.JPG';
import { Grid, Image } from 'semantic-ui-react';

class AboutPage extends Component {
  render() {
    return (
      <div className="indented-section">
        <div className="main-subText" id="home-section-header" style={{paddingTop: "1em"}}> About Me </div>
          <Grid columns={2} className="page-grid">
            <Grid.Row>
              <Grid.Column largeScreen={6} mobile={12} tablet={6} width={6} computer={6} >
                <div className="main-subText" id="big-subtext"> An <span className="emphasis">enginner</span> <p> and </p><span className="emphasis">designer</span> based in <span className="emphasis">NYC.</span></div>
              </Grid.Column>
              <Grid.Column largeScreen={6} mobile={12} tablet={6} width={6} computer={6}>   
                <Image src={aboutMe} id="aboutMe" />
              </Grid.Column>
              <Grid.Column largeScreen={12} mobile={12} tablet={12} style={{marginTop: "2em"}}>
              <div className="content-body" id="about-body"><span className="emphasis">I'm passionate about technology and it's impact on society. </span>
                   As technology keeps advancing, we have been able to see the ways in which it has impacted our lives in both a positive way. I believe in the importance of understanding humanities and how we create new products with people in mind.
                   I don't want to create new products for the sake of creating them, I want to make sure that what I'm creating will make a <span className="emphasis">lasting impact</span>.
              </div>
              </Grid.Column>
              <Grid.Column largeScreen={12} mobile={12} tablet={12} style={{marginTop: "1em"}}>
              <div className="content-body" id="about-body"> My interest and passion in design stems from my desire to pair <span className="emphasis">creativity</span> with <span className="emphasis">science.</span> 
                To understand why and how people interact with products are some very complex problems that stretch my imagination and bring me out of my comfort zone.
              </div>
              </Grid.Column>
              <Grid.Column largeScreen={12} mobile={12} tablet={12} style={{marginTop: "1em"}}>
              <div className="content-body"  id="about-body">With a background in both engineering and design, <span className="emphasis">I can make sure your vision turns into a reality. </span>
                I can make sure that the designs that I create are feasible when beginning to development work and/or developing it myself. 
                My engineer side fuels my design and my designer side drives my software development.
            </div>
              </Grid.Column>
              <Grid.Column largeScreen={12} mobile={12} tablet={12} style={{marginTop: "1em"}}>
              <div className="content-body"  id="about-body">With a background in both engineering and design, <span className="emphasis">I can make sure your vision turns into a reality. </span>
                I can make sure that the designs that I create are feasible when beginning to development work and/or developing it myself. 
                My engineer side fuels my design and my designer side drives my software development.
            </div>
              </Grid.Column>
              <Grid.Column largeScreen={12} mobile={12} tablet={12} textAlign="center" style={{marginTop: "1em", marginBottom: "4em"}}>
              <div className="main-subText" style={{fontSize: "30px"}}>
                Want to learn more?
              </div>
              
              <Button className="action-button" size="lg" style={{marginTop: "2em"}}>
                  Contact Me
                </Button>
              </Grid.Column>
            </Grid.Row>

          </Grid>
      </div>
    )
  }
}

export default AboutPage;
