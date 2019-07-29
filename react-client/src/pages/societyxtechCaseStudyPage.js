import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import {BannerLinkImage} from '../components/banners';
import {Content, ContentImage, ContentBigImage, ContentButton, ContentButtonLinkImage} from '../components/contentOptions';
import societyxTechMac from "../images/societyxtech/societyxTechMac.png";
import mindMap from "../images/societyxtech/mind-map.JPG";
import wireframes from "../images/societyxtech/wireframes.png";
import sketches from "../images/societyxtech/sketches.JPG";
import typography from "../images/societyxtech/typography.png"
import color from "../images/societyxtech/color.png";
import logoSketches from "../images/societyxtech/logo.JPG"
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';



class SocietyxTechPage extends Component {
  render() {
    return (
            <div className="indented-section">
            <BannerLinkImage
              backgroundColor=""
              headerText="Society x Tech"
              subText="Society x Tech is a monthly newsletter discussing the societal implications of technology trends through a hand-picked curation of articles, podcasts, books and interviews."
              role="UX Design, Content Strategy, Prototyping, Brand Identity, Web Development"
              duration="4 weeks"
              tools="Figma, Mailchimp, GatsbyJs"
              deliverables="Branding, Wireframes, Website"
              buttonText="View Website"
              buttonLink="https://www.societyxtech.com/"
              background="This project was created to finalize the branding strategy for my newsletter Society x Tech"
              image={societyxTechMac}
              imageId="travelix-image"
              newWindow={true} />
                    <Slide top cascade>
                      <div className="main-subText" id="section-header"> Overview </div>
                    </Slide>
                  <Row className="page-section">
                    <Fade>
                    <Col xs="12" sm="6" md="6" lg="6" xl="6">
                    <Content
                      title="Problem"
                      content="Previously, for people to subscribe to the newsletter, they were redirected to a landing page on mailchimp. While, this got the job done, Society x Tech did not have it's own platform and there was minimal customization in what the landing page could look like."
                    />
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="6" xl="6">
                      <Content title="Solution"
                        content="This website design and development identifies Society x Tech as a consistent brand as well as: "
                          />
                          <ul>
                            <li className="bullet-item">Allow visitors to subscribe</li>
                            <li className="bullet-item">Read previous issues</li>
                            <li className="bullet-item">Read blog posts featuring different interviews</li>
                          </ul>
                    </Col>
                    </Fade>
                  </Row>
                  <Slide top cascade>
                  <div className="main-subText" id="section-header">Information Architecture</div>
                  </Slide>
                  <Row className="page-section">
                    <Fade>
                    <Col xs="12" md="6" lg="6" xl="6">
                    <ContentBigImage
                      title="Sketches & Wireframes"
                      content="I knew that I wanted the site to be simple and clear and that upon arriving to the site, it would be clear and actionable. Here are the sketches and wireframes: "
                      caption="Initial sketches of Society x Tech Site"
                      image={sketches}
                      imageId="big-wireframes"
                    />
                    </Col>
                      </Fade>
                      <Fade>
                    <Col xs="12" md="6" lg="6" xl="6" style={{marginTop: "12em"}}>
                    <ContentBigImage
                    caption="Some of the wireframes of Travelix"
                    image={wireframes}
                    imageId="big-wireframes" />
                    </Col>
                    </Fade>
                    
                  <Row>
                </Row>
                  </Row>
                  <Slide top cascade>
                      <div className="main-subText" id="section-header">Brand Identity</div>
                      </Slide>
                  <Row>
                      <Fade>
                      <Col xs="12" md="6" lg="6" xl="6">
                        <ContentImage
                          title="Logo & Naming"
                          content="I chose the name Society x Tech (pronounced: Society by Tech) simply because the newsletter is discussing how society is impacted BY tech. I considered other options and used a mind map to work through my thought process as well as sketched out different logo options."
                          image={mindMap}
                          id="fullRow2"
                          imageId="travelixMindMap"
                          caption="Mind map"
                        />
                      </Col>
                      </Fade>
                      <Fade>
                      <Col xs="12" md="6" lg="6" xl="6">
                      <ContentImage
                          title=""
                          content=""
                          image={logoSketches}
                          id="fullRow2"
                          imageId="logoSketches"
                          caption="Logo Sketches"
                        />
                      </Col>
                      </Fade>

                      <Col xs="12" md="9" lg="9" xl="9">
                      <Fade>
                      <ContentImage
                        title="Color"
                        content="I chose green as the primary color because as green represents growth, it is my hope that from subscribers reading the newsletter, they would have growth in their own perspective. The other colors provide a sense of tranquility and stability."
                        id="fullRow2"
                        image={color}
                        imageId="wireframes"
                      />
                      </Fade>
                      </Col>

                      <Col xs="12" md="9" lg="9" xl="9">
                      <Fade>
                      <ContentImage
                        title="Typography"
                        content="Tech/Coding fonts in developer environments are usually monospaced. I paired a monospaced font with a san-serif font."
                        id="fullRow2"
                        image={typography}
                        imageId="wireframes"
                      />
                      </Fade>
                      </Col>
                  </Row>
                  <Slide top cascade>
               <div className="main-subText" id="section-header">Final Development</div>
               </Slide>
              <Row className="page-section">
              <Fade>
              <Col xs="12" md="9" lg="9" xl="9">
                <ContentButton title="Web Development"
                  content="Based on the wireframes and style guide we were able to bring our designs to life. Using GatsbyJS, I modified an exisiting template and coded the Website using React and CSS"
                  buttonText="View Website"
                  buttonLink="https://www.societyxtech.com/"
                  id="fullRow3"
                    />
              </Col>
              </Fade>
              </Row>
              <Slide top cascade>
                <div className="main-subText" id="section-header">Conclusion</div>
              </Slide>
              <Row className="page-section">
              <Col xs="12" sm="9" md="9" lg="9" xl="9">
                  <Fade>
                  <Content
                    title="Reflections"
                    content="This project was fun because I learned how to use GatsbyJS to build fast, responsive web applications."
                    id="fullRow"
                  />
                  </Fade>
                  <Fade>
                    <Content title=""
                      content="It also challenged me to think more about branding and how it plays into creating a great product."
                      id="fullRow"
                        />
                  </Fade>
              </Col>
              </Row>
          </div>

    )
  }
}

export default SocietyxTechPage;
