import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle} from 'reactstrap';
import me from '../../images/me.png';
import NavBar from '../headerComponent/navBar';
import Footer from '../footerComponent/footer';
import { Link } from 'react-router-dom';
import BannerLinkImage from '../common/bannerLinkImage';
import Content from '../common/content';
import ContentImage from '../common/contentImage';
import ContentButton from '../common/contentButton';
import ContentButtonLinkImage from '../common/ContentButtonLinkImage'
import schedxIphone from "../../images/schedx-pic.png";
import schedxSketches from "../../images/schedx-sketches.png";
import schedxDesigns from "../../images/schedx-final-designs.png"

class SchedxPage extends Component {
  render() {
    return (
      <div>
        <BannerLinkImage
          backgroundColor="magneg-banner"
          headerText="Schedx"
          subText="A new mobile application that allows personal trainers to schedule and manage their clients."
          role="Role: Design, Brand Identity"
          buttonText="View Prototype"
          buttonLink="https://www.figma.com/proto/fWNlQBHMqxPdfucZSbMlHxyv/schedx?node-id=1%3A2&viewport=440%2C427%2C0.25&scaling=scale-down"
          image={schedxIphone}
          imageId="schedx-image" />
          <div className="main-content">
            <div className="indented-section">
              <Row>
              <Col xs="12" md="6" lg="6" xl="6">
              <Content
                title="Problem"
                content="The Personal Trainers industry has experienced steady growth over the five years to 2017, fueled by rising demand for weight-loss services and greater interest in customized workout regimes. Design a product that allows gym trainers to create a workout plan for their clients."
              />
              </Col>
              <Col xs="12" md="6" lg="6" xl="6">
                <Content title="Solution"
                  content="My solution, schedx, is a mobile app for personal trainers to keep track of their clients workouts and progress as they are being scheduled in."
                    />
              </Col>
              </Row>
              <Row>
              <Col xs="12" md="12" lg="12" xl="12">
              <Content
                title="Market Research"
                content="My process during this challenge was to think in the perspective a personal trainer rather than a client of a personal trainer. There are about 270,000 personal trainers in the United States and on average personal trainers see 4–5 clients a day. Personal trainers on average see their clients about two times a week. Because managing their clientele of varying skillsets throughout the week can be tasking and overwhelming, we outlined these “How might we” statements:"
              />
              <ul>
                <li className="bullet-item">How might we keep track of the schedule of our clients?</li>
                <li className="bullet-item">How might we create a new workout plan for our clients?</li>
                <li className="bullet-item">How might we take notes in regards to each workout session with our client?</li>
              </ul>
              </Col>
              </Row>
              <Row>
              <Col xs="12" md="6" lg="6" xl="6">
                <ContentImage title="Sketches"
                  content="We first began looking at apps like NikeFit and Apptiv to gain some design inspiration and best determine how schedx can fit into the market. The scheduling aspect is missing in both of these applications as well as the ability for any personal trainer to come up with workouts specifically for their clients. Keeping this and my “How might we” in mind. We came up with these sketches:"
                  image={schedxSketches}
                    />
              </Col>
              <Col xs="12" md="6" lg="6" xl="6">
              <ContentButtonLinkImage
                title="Mockups"
                content="From the sketches, we moved into design. We drew inspiration from Google Calendar's look and feel and went with a to-do app style for scheduling workouts."
                image={schedxDesigns}
                buttonText="View Prototype"
                buttonLink="https://www.figma.com/proto/fWNlQBHMqxPdfucZSbMlHxyv/schedx?node-id=27%3A106&viewport=440%2C427%2C0.25&scaling=scale-down"
              />
              </Col>
              </Row>
              <Row style={{marginBottom: "2em"}}>
              <Col xs="12" md="6" lg="6" xl="6">
              <Content
                title="Next Steps"
                content="While this does satisfy the MVP of allowing personal trainers to create workouts for their clients, there are still features that can be built out in the next phase. These features are: "
              />
              <ul>
                <li className="bullet-item">Building a community feature to allowing personal trainers to connect with one another and share and create workouts</li>
                <li className="bullet-item">Allow personal trainers to share the workouts with their clients</li>
              </ul>
              </Col>
              <Col xs="12" md="6" lg="6" xl="6">
              <Content
                title="Takeaways"
                content="The challenging aspect of this was that We really didn’t have a pool of people in my network that we could leverage to do more extensive research to really make this first iteration even better."
              />
              </Col>
              </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default SchedxPage;
