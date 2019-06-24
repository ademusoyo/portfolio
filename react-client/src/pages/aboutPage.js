import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle} from 'reactstrap';
import aboutMe from '../images/about-me.JPG';
import { Grid, Image } from 'semantic-ui-react';

class AboutPage extends Component {
  render() {
    return (
      <div>
          <div className="indented-section">
            <div className="main-subText" id="section-header" style={{paddingTop: "3em"}}> About Me </div>
            <Grid columns={2}>
            <Grid.Row className="section">
            <Grid.Column>
              <Image src={aboutMe} id="aboutMe"/>
            </Grid.Column>
            <Grid.Column>
            <div className="content-body" id="about-body"><span className="bold">I'm passionate about technology and it's impact on society. </span>
            As technology keeps advancing, we have been able to see the ways in which it has impacted our lives in both a positive way. I believe in the importance of understanding humanities and how we create new products with people in mind.
            I don't want to create new products for the sake of creating them, I want to make sure that what I'm creating will make a <span className="bold">lasting impact</span>.
            </div>

            <div className="content-body"  id="about-body"><span className="bold">I love challenges and stepping out of my comfort zone.</span>
            Every time I step out of my comfort zone, I'm able to learn more about myself and unlock new interests. I embrace new challenges with <span className="bold">tenacity</span> and <span className="bold">ambition.</span>
            </div>

            <div className="content-body"  id="about-body"><span className="bold">I love to travel. </span>
              I'm always on the go and exploring new cities and countries whenever I can. Exploring different cultures provides a different perspective and sparks new ideas. Keeping myself busy keeps me very focused.
            </div>
            <div className="content-body"  id="about-body"><span className="bold">I can make sure your vision turns to reality. </span>
              As a <span className="bold">designer</span> and <span className="bold">developer</span> I can make sure that what you envision for your next product<span className="bold"> will be there. </span>
              My developer side fuels my design and my designer side drives my software development
            </div>
           </Grid.Column>
            </Grid.Row>

            </Grid>
          </div>
          <div className="indented-section">
          <div className="main-subText" id="section-header"> Currently: </div>
          <div style={{marginBottom: "20%", textAlign: "center"}}>
              <div className="bullet-item" >Independent UX Designer and Website Developer</div>
             <div className="bullet-item" >Full Stack Developer at <a className="page-link" href="https://www.goldmansachs.com/" _target="blank">Goldman Sachs</a></div>
             <div className="bullet-item" >Co-Founder and COO of <a className="page-link" href="https://www.macscientists.com/" _target="blank">MacScientists</a></div>
             <div className="bullet-item" >Founder and Content Creator of <a className="page-link" href="https://mailchi.mp/02da2a5b2d98/societyxtech" _target="blank">Society x Tech</a></div>
          </div>
          </div>
      </div>
    )
  }
}

export default AboutPage;
