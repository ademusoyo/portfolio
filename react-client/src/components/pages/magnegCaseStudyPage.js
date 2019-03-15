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
import magnegIphone from "../../images/magneg-iphone.png";
import magnegPieChart from "../../images/pie-chart-magneg.png";
import magnegCompetitive from "../../images/magneg-competitive.png";
import magnegColors from "../../images/magneg-colors.png";
import magnegSketches from "../../images/magneg-sketches.png";

class MagnegPage extends Component {
  render() {
    return (
      <div>
        <BannerLinkImage
          backgroundColor="magneg-banner"
          headerText="Magneg"
          subText="A new cloud storage mobile application that allows users to create, store and collaborate all in one platform."
          role="Role: User Research, Design, Brand Identity"
          buttonText="View Prototype"
          buttonLink="https://www.figma.com/proto/MLLZbAK70j2aG3NCv8Lad28h/Finishing-Touches?node-id=140%3A2&viewport=2036%2C1388%2C0.5&scaling=scale-down"
          image={magnegIphone}
          id="magneg-image" />
          <div className="main-content">
            <div className="indented-section">
              <Row>
              <Col xs="12" md="6" lg="6" xl="6">
              <Content
                title="Problem"
                content="Creating, sharing, and collaborating on different projects can be frustrating especially when trying to organize. Individuals need a tool that allows people to not only stay connected, but to allow content creation and collaboration in a uniformed organized way."
              />
              </Col>
              <Col xs="12" md="6" lg="6" xl="6">
                <Content title="Solution"
                  content="Magneg aims to be an operating-system agnostic platform that is easy to use and provides maximum functionality. Users have the ability to store, organize, share, and collaborate all in one application."
                    />
              </Col>
              </Row>
              <Row>
              <Col xs="12" md="12" lg="12" xl="12">
              <Content
                title="User Research"
                content="A survey was sent out to participants of varying demographics. The survey results concluded the following: "
              />
              </Col>
              </Row>
              <Row>
              <Col xs="12" md="6" lg="6" xl="6">
              <img src={magnegPieChart} className="content-image" />
              </Col>
              <Col xs="12" md="3" lg="3" xl="3" className="subheader-content" style={{marginLeft: "10%"}}>
                <div className="subheader-text">Common Cloud Storage Features</div>
                <ul>
                  <li className="bullet-item">Uploading Content</li>
                  <li className="bullet-item">Creating Content</li>
                  <li className="bullet-item">Organizing Content</li>
                </ul>
                <div className="subheader-text" style={{marginTop: "2em"}}>Most Important Features: </div>
                <ul>
                  <li className="bullet-item">Content Synchronization across platforms</li>
                  <li className="bullet-item">Collaborative Functionality </li>
                </ul>
              </Col>
              </Row>

              <Row>
              <Col xs="12" md="6" lg="6" xl="6">
              <ContentImage
                title="Competitive Analysis"
                content="Based on our SWOT Analysis of Google Drive, Pinterest, and iCloud, in order for Magneg to enter the market it would need to allow a lot of storage space, be operating system agnostic, allow content to be created within the platform, and collaborative."
                image={magnegCompetitive}
              />
              </Col>
              <Col xs="12" md="6" lg="6" xl="6">
                <ContentButton title="User Flows"
                  content="Magneg aims to be an operating-system agnostic platform that is easy to use and provides maximum functionality. Users have the ability to store, organize, share, and collaborate all in one application. "
                  buttonText="View User Flows"
                  buttonLink="https://drive.google.com/open?id=1xkJhwpEPv4ihjJUMSHCVpeByc7o07cP1"
                    />
              </Col>
              </Row>
              <Row>
              <Col xs="12" md="6" lg="6" xl="6">
              <ContentImage
                title="Branding"
                content="Before jumping into the design, we wanted to determine the overall look and feel for the app. We wanted it to be colorful, but also present a very minimalistic look and feel for the design. We chose to use more cool colors that symbolize reliability and trust within the platform and we chose to pair the fonts Karla and Montserrat because we felt that they gave a more fun and collaborative vibe within the platform."
                image={magnegColors}
              />
              </Col>
              <Col xs="12" md="6" lg="6" xl="6">
              <ContentImage
                title="Logo and Naming"
                content="Magneg aims to portray that is fun, reliable and collaborative. It is the one-stop shop for the people both create and collaborate. We wanted to use an icon that represents attraction because the aim is for people to be drawn to use Magneg instead of other cloud-sharing services. When we think of attraction, we think of magnets. We chose to use something that was a play on magnet, and thus Magneg was born."
                image={magnegSketches}
              />
              </Col>
              </Row>
              <Row>
              <Col xs="12" md="6" lg="6" xl="6">
              <Content
                title="Wireframes"
                content="Low-Fi wireframes were created, tested, and iterated before graduating to the hi-fidelity mockup stage. Usability testing was conducted in person  testing users ability to upload a file, organize a file, and create an account with a clickable low-fi prototype. Overall the results were positive stating that the only roadblock was to make the buttons stand out and to make the organize a file option more clear."
              />
              </Col>
              <Col xs="12" md="6" lg="6" xl="6">
                <ContentButton title="Mockups"
                  content="From the wireframes, it was time to bring our product to life by adding color and implementing iOS design best practices. Preference and usability testing was conducted to prompting more iterations before determining the finished result. From the preference tests, we saw that users preferred the hidden menu option rather than the options being listed at the bottom of the screen, however, when considering best design practices, it is better for it to be at the bottom   of the screen. When conducting usability testing, all users found the app to be intuitive and easy to use."
                  buttonText="View Prototype"
                  buttonLink="https://www.figma.com/proto/MLLZbAK70j2aG3NCv8Lad28h/Finishing-Touches?node-id=140%3A2&viewport=2036%2C1388%2C0.5&scaling=scale-down"
                    />
              </Col>
              <Col xs="12" md="4" lg="4" xl="4">
              <Content
                title="Takeaways"
                content="Magneg fulfills its purpose of being a new cloud-storage platform that allows users to create, upload, and share content while collaborating with others in one platform. "
              />
              </Col>
              <Col xs="12" md="4" lg="4" xl="4" style={{marginTop: "4em"}}>
                <Content title=""
                  content="From this  prototype we are ready to begin software development."
                    />
              </Col>
              <Col xs="12" md="4" lg="4" xl="4" style={{marginTop: "4em"}}>
                <Content title=""
                  content="Looking back, we should have done more exploration to determine the optimal solution as this could have been done from many angles."
                    />
              </Col>
              </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default MagnegPage;
