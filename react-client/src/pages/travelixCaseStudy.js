import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import {BannerLinkImage} from '../components/banners';
import {PieChartMetric} from '../components/metric';
import {Content, ContentImage, ContentButton, ContentButtonLinkImage} from '../components/contentOptions';
import travelixIphone from "../images/travelix/caseStudyIphone.png";
import travelixSketches from "../images/travelix/mind-map.jpg";
import tenPercent from "../images/travelix/10-percent.png";
import fifteenPercent from "../images/travelix/15-percent.png";
import eightyOnePercent from "../images/travelix/81-percent.png";
import airbnb from "../images/travelix/Airbnb.png";
import instagram from "../images/travelix/Instagram.png";
import youtube from "../images/travelix/Youtube.png";
import nimi from "../images/travelix/nimi.png";
import derek from "../images/travelix/derek.png";
import persona from "../images/persona.png";
import wireframes from "../images/travelix/dribble-shots.png";
import sketches from "../images/travelix/sketches.jpg";
import styleGuide from "../images/travelix/branding.png";
import mockups from "../images/travelix/final-mockups.png";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';



class TravelixPage extends Component {
  render() {
    return (
      <div>
        <BannerLinkImage
          backgroundColor=""
          headerText="Travelix"
          subText="Travelix is a new mobile application that allows you plan your next vacation by giving you reviews, articles, and photos relevant to that area."
          role="Ideation, User Research, UX Design, Content Strategy, Prototyping, and Brand Identity"
          buttonText="View Prototype"
          buttonLink="https://www.figma.com/proto/f2n348DjtiG7jTwazMLorylD/Travel-App?node-id=53%3A1&viewport=322%2C202%2C0.371819&scaling=scale-down"
          background="This design project was created as a final project for my Bloc Apprenticeship program."
          image={travelixIphone}
          imageId="travelix-image"
          newWindow={true} />
          <div className="main-content">
            <div className="indented-section">
                  <Row>
                    <Slide top cascade>
                      <div className="main-subText" id="section-header"> Overview </div>
                    </Slide>
                    <Fade>
                    <Col xs="12" sm="6" md="6" lg="6" xl="6">
                    <Content
                      title="Problem"
                      content="Currently, people use multiple websites and applications to gain insight about a new place that they are visiting. This process can be really overwhelming and hard to synthesize into understanding what you want to to do and information tends to be missing."
                    />
                    </Col>
                    <Col xs="12" sm="5" md="5" lg="5" xl="5">
                      <Content title="Solution"
                        content="Travelix aims to be that new mobile application that centralizes all types of media for you to plan your dream location. Users have the ability to:"
                          />
                          <ul>
                            <li className="bullet-item">View articles, photos, and reviews within the platform</li>
                            <li className="bullet-item">Create their own content</li>
                            <li className="bullet-item">Organize your favorite content into collections to save for later.</li>
                          </ul>
                    </Col>
                    </Fade>
                  </Row>
                  <Row>
                  <Slide top cascade>
                  <div className="main-subText" id="section-header"> Research </div>
                  </Slide>
                  <Fade>
                    <Col xs="12" sm="9" md="9" lg="9" xl="9">
                      <Content
                        title="User Research"
                        content="Based on our survey participants, we were able to identify key features as well as exisiting pain points that will drive the tasks that were needed in order to build Travelix."
                        id="fullRow"
                      />
                    </Col>
                    </Fade>
                    <Fade>
                    <Row className="group">
                        <Col xs="12" sm="12" md="4" lg="4" xl="4" style={{textAlign: "center"}}>
                        <PieChartMetric
                            pieChart={eightyOnePercent}
                            percentage="81%"
                            text="of participants stated that they primarily travel for personal reasons." />
                        </Col>
                        <Col xs="12" sm="12" md="4" lg="4" xl="4" style={{textAlign: "center"}}>
                        <PieChartMetric
                            pieChart={fifteenPercent}
                            percentage="15%"
                            text="of participants travel primarily for business." />
                        </Col>
                        <Col xs="12" sm="12" md="4" lg="4" xl="4" style={{textAlign: "center"}}>
                        <PieChartMetric
                            pieChart={tenPercent}
                            percentage="10%"
                            text="of participants travel because they're digital nomads." />
                        </Col>
                      </Row>
                      </Fade>
                      <Row className="group">
                          <Fade>
                          <div id="section-sub-header">Must Have Features</div>
                          </Fade>
                          <Fade>
                          <Row className="key-features">
                            <Col xs="6" md="4" lg="4" xl="4">
                              <div className="tile" style={{fontSize: "18px"}}>
                                Reading & Writing Reviews
                              </div>
                            </Col>
                            <Col xs="6" md="4" lg="4" xl="4">
                              <div className="tile" style={{fontSize: "18px"}}>
                                Organizing Travel Ideas
                              </div>
                            </Col>
                            <Col xs="6" md="4" lg="4" xl="4">
                              <div className="tile" style={{fontSize: "18px"}}>
                                Adding your Own Content
                              </div>
                            </Col>
                        </Row>
                        </Fade>
                    </Row>
                  <Row>
                  <Fade>
                  <Col xs="12"  sm="9" md="9" lg="9" xl="9">
                  <Content
                    title="Competitive Analysis"
                    content="There are many resources that consumers are currently using to organize and plan their travel. By doing competitive analysis, we determined that Travelix needs to allow for different types of media to be available to view within the platform and allow users to organize their ideas in travel buckets for future destinations. Users should be able to write their own content to provide their own feedback authentically."
                    id="fullRow"
                  />
                  </Col>
                  </Fade>
                  <Fade>
                    <Row className="group">
                      <Col xs="12" md="4" lg="4" xl="4" className="swot">
                        <img src={airbnb} id="competitive-image" />
                        <div className="caption">Strengths</div>
                        <div className="content-body" id="subCaption">Allows you to look for different types of accommodations for varying groups of people</div>
                        <div className="content-body" id="subCaption">Can create an itinerary</div>
                        <div className="caption" id="adjustLeft2">Weaknesses</div>
                        <div className="content-body" id="subCaption">Lack of information about safety </div>
                        <div className="content-body" id="subCaption">Doesn’t allow you to compare with other sites</div>
                        <div className="caption" id="adjustLeft">Opportunities</div>
                        <div className="content-body" id="subCaption">Varying sources for accommodations and excursions</div>
                        <div className="content-body" id="subCaption">Creating an itinerary</div>
                        <div className="caption">Threats</div>
                        <div className="content-body" id="subCaption">Gives a limited view on the accommodation</div>
                        <div className="content-body" id="subCaption">Not reliable in terms of payments</div>
                      </Col>
                      <Col xs="12" md="4" lg="4" xl="4"  className="swot">
                        <img src={instagram} id="competitive-image" />
                        <div className="caption" id="adjustLeft2">Strengths</div>
                        <div className="content-body" id="subCaption">You can build your own brand/platform</div>
                        <div className="content-body" id="subCaption">Visually Driven</div>
                        <div className="caption" id="adjustLeft2">Weaknesses</div>
                        <div className="content-body" id="subCaption">Cannot share your organized content with others</div>
                        <div className="content-body" id="subCaption">Can be overwhelming to organize and consume</div>
                        <div className="caption" id="adjustLeft">Opportunities</div>
                        <div className="content-body" id="subCaption">Create “feeds” based on different locations</div>
                        <div className="content-body" id="subCaption">Allow different media types to appear on the feed</div>
                        <div className="caption" id="">Threats</div>
                        <div className="content-body" id="subCaption">Algorithm doesn't level out the playing field for everyone to see content.</div>
                        <div className="content-body" id="subCaption">Limited understanding of the images being shown.</div>
                      </Col>
                      <Col xs="12" md="4" lg="4" xl="4"  className="swot">
                        <img src={youtube} id="competitive-image" />
                        <div className="caption" id="adjustLeft2">Strengths</div>
                        <div className="content-body" id="subCaption">Allows you to view video content</div>
                        <div className="content-body" id="subCaption">Allows you to see more of an area that you are trying to visit</div>
                        <div className="caption" id="adjustLeft2">Weaknesses</div>
                        <div className="content-body" id="subCaption">You can only show videos</div>
                        <div className="content-body" id="subCaption">Has trended to more of a popularity contest</div>
                        <div className="caption" id="adjustLeft">Opportunities</div>
                        <div className="content-body" id="subCaption">Showing video content</div>
                        <div className="content-body" id="subCaption">Creating lists for specific types of videos</div>
                        <div className="caption">Threats</div>
                        <div className="content-body" id="subCaption">Only shows video content</div>
                        <div className="content-body" id="subCaption">Algorithm issues</div>
                      </Col>
                    </Row>
                  </Fade>
                  </Row>
                  <Row>
                    <Fade>
                    <Col xs="12" md="9" lg="9" xl="9">
                    <Content
                      title="User Personas"
                      content="With the information gained from my competitive analysis and my user surveys I was ready to create my user personas, hypothetical archetypes of real users as defined by their goals and frustrations. These personas helped drive the Travelix Solution."
                      id="fullRow"
                    />
                    </Col>
                    </Fade>
                    <Row className="group">
                      <Fade>
                      <Col xs="12" sm="6" md="6" lg="6" xl="6" className="user-persona">
                        <img src={nimi} id="travelix-persona-image" />
                        <div className="content-body" id="bio-text">Nimi | 23 Years Old | Houston, Tx</div>
                        <div className="quote">“Looking for my next adventure”</div>
                        <div id="user-persona-header">Goals</div>
                        <ul>
                        <li className="bullet-item">Organize her dream travel places</li>
                        <li className="bullet-item">Finding new places to travel</li>
                        </ul>
                        <div id="user-persona-header">Frustrations</div>
                        <ul>
                        <li className="bullet-item">Having to search through multiple sites.</li>
                        <li className="bullet-item">Creating her own content.</li>
                        </ul>
                      </Col>
                      </Fade>
                      <Fade>
                      <Col xs="12" sm="6" md="6" lg="6" xl="6" className="user-persona">
                        <img src={derek} id="travelix-persona-image" />
                        <div className="content-body" id="bio-text">Derek | 28 Years Old | Digital Nomad </div>
                        <div className="quote">“Travel and work is a lifestyle”</div>
                        <div id="user-persona-header">Goals</div>
                        <ul>
                        <li className="bullet-item">To explore a new country/area</li>
                        <li className="bullet-item">Keep growing his business</li>
                        </ul>
                        <div id="user-persona-header">Frustrations</div>
                        <ul>
                        <li className="bullet-item">Not enough information on pricing</li>
                        <li className="bullet-item">Not in a centralized location</li>
                        </ul>
                      </Col>
                      </Fade>
                    </Row>
                  </Row>
                  </Row>
                  <Row>
                  <Slide top cascade>
                  <div className="main-subText" id="section-header">Information Architecture</div>
                  </Slide>
                  <Row>
                  <Fade>
                  <Col xs="12" md="9" lg="9" xl="9" style={{marginLeft: "1em"}}>
                    <Content title="User Stories & User Flows "
                      content="While keeping our personas in mind, we focused on outlining the features that this new application would need to have by creating user stories. I focused on the high priority items in order to create the Minimum Viable Product (MVP) "
                      id="fullRow"
                        />
                  </Col>
                  </Fade>
                  </Row>

                  <Row className="group" id="userStories">
                  <Fade>
                    <Col xs="12" sm="3" md="2" lg="2" xl="2" className="user-story">
                      <img src={persona} id="user-flow-image"/>
                      <div className="content-body" id="story-caption">"I want to create an account "</div>
                    </Col>
                    <Col xs="12" sm="3" md="2" lg="2" xl="2" className="user-story">
                      <img src={persona} id="user-flow-image"/>
                      <div className="content-body" id="story-caption">"I want to look at what content exists in the platform"</div>
                    </Col>
                    <Col xs="12" sm="3" md="2" lg="2" xl="2" className="user-story">
                      <img src={persona} id="user-flow-image"/>
                      <div className="content-body" id="story-caption">“I want to search for a location</div>
                    </Col>
                    </Fade>
                  </Row>
                  <Fade>
                  <Row className="group"  id="userStories" style={{paddingBottom: "1.5em"}}>
                    <Col xs="6" sm="3" md="2" lg="2" xl="2" className="user-story">
                      <img src={persona} id="user-flow-image"/>
                      <div className="content-body" id="story-caption">"I want to log into my account "</div>
                    </Col>
                    <Col xs="6" sm="3" md="2" lg="2" xl="2" className="user-story">
                      <img src={persona} id="user-flow-image"/>
                      <div className="content-body" id="story-caption">"I want to organize my travel ideas"</div>
                    </Col>
                    <Col xs="6" sm="3" md="2" lg="2" xl="2" className="user-story">
                      <img src={persona} id="user-flow-image"/>
                      <div className="content-body" id="story-caption">“I want to write my own content”</div>
                    </Col>
                  </Row>
                  </Fade>
                  </Row>
                  <Row>
                    <Fade>
                    <Col xs="12" md="9" lg="9" xl="9">
                    <Content
                      title="Sketches & Wireframes"
                      content="Once we have an understanding of how we want this mobile application to flow as well as an agreed upon content strategy, we then proceeded to begin focusing more on design. We began with some small sketching and transitioned into build low-fi digital wireframes."
                      id="fullRow"
                    />
                    </Col>
                      </Fade>
                      <Fade>
                    <Row style={{marginLeft: "10%"}}>
                      <Col xs="12" md="9" lg="9" xl="9">
                        <img src={sketches} id="wireframes" />
                      </Col>
                      <Col xs="12" md="9" lg="9" xl="9">
                      <img src={wireframes} id="wireframes"/>
                      </Col>
                    </Row>
                    </Fade>
                  <Row>
                </Row>
                    <Row>
                      <Slide top cascade>
                        <div className="main-subText" id="section-header">Brand Identity</div>
                        </Slide>
                        <Fade>
                        <Col xs="12" md="9" lg="9" xl="9">
                          <ContentImage
                            title="Logo & Naming"
                            content="Travelix aims to allow you to discover new places and build your dream travel list within the platform. Within the platform, you’re building a list for your next travel destination and sharing your own travel experiences with other people. "
                            image={travelixSketches}
                            id="fullRow"
                            imageId="travelixMindMap"
                          />
                        </Col>
                        </Fade>

                        <Col xs="12" md="9" lg="9" xl="9">
                        <Fade>
                        <Content
                          title="Branding"
                          content="We wanted Travelix to exude some sense of vibrancy while also being very minimalistic. The vibrant red and orange colors give off the vibrant sense of adventure while the brown/tannish colors give that base of calmness and reliability."
                          id="fullRow"
                        />
                        </Fade>
                        <Fade>
                        <img src={styleGuide} id="wireframes"/>
                        </Fade>
                        </Col>
                    </Row>
                  </Row>
              <Row>
                <Slide top cascade>
              <div className="main-subText" id="section-header">Final Designs</div>
              </Slide>
              <Fade>
              <Col xs="12" md="9" lg="9" xl="9">
                <ContentButton title="High-Definition Mockups"
                  content="From the wireframes and style guide we were able to bring our designs to life. We went through several iterations to get to the finalized solution that is clean, simple, accessible and solves our original problem. The prototype was created using Figma."
                  buttonText="View Prototype"
                  buttonLink="https://www.figma.com/proto/f2n348DjtiG7jTwazMLorylD/Travel-App?node-id=53%3A1&viewport=322%2C202%2C0.371819&scaling=scale-down"
                  id="fullRow"
                    />
              </Col>
              </Fade>
              <Fade>
              <img src={mockups} id="travelixMockups"/>
              </Fade>
              </Row>
              <Row>
              <Slide top cascade>
                <div className="main-subText" id="section-header">Conclusion</div>
              </Slide>
              <Col xs="12" sm="9" md="9" lg="9" xl="9">
                  <Fade>
                  <Content
                    title="Reflections"
                    content="This project was definitely very interesting because it exposed some of the different ways to consider buildind and prototyping an application."
                    id="fullRow"
                  />
                  </Fade>
                  <Fade>
                    <Content title=""
                      content="Looking back, I realized my own biases of building an application without considering all accessibility best practices in my first iteration."
                      id="fullRow"
                        />
                  </Fade>
                  <Fade>
                      <Content title=""
                        content="When considering actual development of this application, I would challenge the high priority items to see what could be dropped down to medium priority items in order to get the product out sooner rather than later. "
                        id="fullRow"
                          />
                  </Fade>
              </Col>
              </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default TravelixPage;
