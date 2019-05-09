import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import {BannerLinkImage} from '../components/banners';
import {PieChartMetric} from '../components/metric';
import {Content, ContentImage, ContentButton, ContentButtonLinkImage} from '../components/contentOptions';
import magnegIphone from "../images/magneg/magneg-iphone.png";
import magnegColors from "../images/magneg/magneg-colors.png";
import magnegSketches from "../images/magneg/magneg-sketches.png";
import personalPieChart from "../images/magneg/magneg-personal-use.png";
import educationPieChart from "../images/magneg/magneg-education-use.png";
import workPieChart from "../images/magneg/magneg-work-use.png";
import pinterest from "../images/magneg/pinterest.png";
import googleDrive from "../images/magneg/googledrive.png";
import icloud from "../images/magneg/icloud.png";
import antonia from "../images/magneg/antonia.png";
import courtney from "../images/magneg/courtney.png";
import persona from "../images/persona.png";
import userFlow from "../images/magneg/create-account.png";
import userFlow2 from "../images/magneg/share-content.png";
import sketches from "../images/magneg/sketches.JPG";
import wireframes from "../images/magneg/wireframes.png";
import styleGuide from "../images/magneg/style-guide.png";
import totalPercent from "../images/magneg/create-account-100.png";
import seventyFivePercent from "../images/magneg/uploading-content.png";
import landingA from "../images/magneg/landing-a.png";
import landingB from "../images/magneg/landing-b.png";
import loginA from "../images/magneg/log-in-a.png";
import loginB from "../images/magneg/log-in-b.png";
import dashboardA from "../images/magneg/dashboard-a.png";
import dashboardB from "../images/magneg/dashboard-b.png";
import mockups from "../images/magneg/final-mockups.png";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';



class MagnegPage extends Component {
  render() {
    return (
      <div>
        <BannerLinkImage
          backgroundColor=""
          headerText="Magneg"
          subText="A new cloud storage mobile application that allows users to create, store and collaborate all in one platform."
          role="User Research, UX Design, Content Strategy, Prototyping, Brand Identity"
          background="This project was my first project during my Bloc Apprenticeship program. We were tasked with creating a cloud storage application."
          buttonText="View Prototype"
          buttonLink="https://www.figma.com/proto/MLLZbAK70j2aG3NCv8Lad28h/Finishing-Touches?node-id=140%3A2&viewport=2036%2C1388%2C0.5&scaling=scale-down"
          image={magnegIphone}
          imageId="magneg-image"
          newWindow={true} />
          <div className="main-content">
            <div className="indented-section">
                  <Row>
                    <Slide top cascade>
                      <div className="main-subText" id="section-header"> Overview </div>
                    </Slide>
                    <Fade>
                    <Col xs="12" md="6" lg="6" xl="6">
                    <Content
                      title="Problem"
                      content="Creating, sharing, and collaborating on different projects can be frustrating especially when trying to organize. Individuals need a tool that allows people to not only stay connected, but to allow content creation and collaboration in a uniformed organized way."
                    />
                    </Col>
                    <Col xs="12" md="5" lg="5" xl="5">
                      <Content title="Solution"
                        content="Magneg aims to be an operating-system agnostic platform that is easy to use and provides maximum functionality. Users have the ability to:"
                          />
                          <ul>
                            <li className="bullet-item">Upload Content</li>
                            <li className="bullet-item">Create Content</li>
                            <li className="bullet-item">Collaborate Content</li>
                            <li className="bullet-item">Share Content with others</li>
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
                        content="In order to understand the problem that we were trying to solve, we sent out a survey to understand how users are currently using cloud storage applications  that are on the market. These are the concluding results of the survey: "
                        id="fullRow"
                      />
                    </Col>
                    </Fade>
                    <Fade>
                    <Row className="group">
                        <Col xs="12" sm="12" md="4" lg="4" xl="4" style={{textAlign: "center"}}>
                        <PieChartMetric
                            pieChart={personalPieChart}
                            percentage="58%"
                            text="of participants use cloud storage applications for personal use." />
                        </Col>
                        <Col xs="12" sm="12" md="4" lg="4" xl="4" style={{textAlign: "center"}}>
                        <PieChartMetric
                            pieChart={educationPieChart}
                            percentage="21.5%"
                            text="of participants use cloud storage applications for education." />
                        </Col>
                        <Col xs="12" sm="12" md="4" lg="4" xl="4" style={{textAlign: "center"}}>
                        <PieChartMetric
                            pieChart={workPieChart}
                            percentage="10.5%"
                            text="of participants use cloud storage applications for work." />
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
                              <div className="tile">
                                Upload
                              </div>
                            </Col>
                            <Col xs="6" md="4" lg="4" xl="4">
                              <div className="tile">
                                Create
                              </div>
                            </Col>
                            <Col xs="6" md="4" lg="4" xl="4">
                              <div className="tile">
                                Organize
                              </div>
                            </Col>
                            <Col xs="6" md="4" lg="4" xl="4">
                              <div className="tile">
                                Share
                              </div>
                            </Col>
                            <Col xs="6" md="4" lg="4" xl="4">
                              <div className="tile">
                                Collaborate
                              </div>
                            </Col>
                            <Col xs="6" md="4" lg="4" xl="4">
                              <div className="tile" id="special-tile">
                                Offline Access
                              </div>
                            </Col>
                        </Row>
                        </Fade>
                    </Row>
                  <Row>
                  <Fade>
                  <Col xs="12" sm="9" md="9" lg="9" xl="9">
                  <Content
                    title="Competitive Analysis"
                    content="Cloud Storage is currently a saturated market and we need to figure out how to position Magneg is a strong competitotr in the market. From the survey, we took the three of the top used cloud storage platforms and compared them against each other to understand their strengths and weaknesss. Based on our SWOT Analysis, in order for Magneg to enter the market it would need to allow a lot of storage space, be operating system agnostic, allow content to be created within the platform, and collaborative."
                    id="fullRow"
                  />
                  </Col>
                  </Fade>
                  <Fade>
                    <Row className="group">
                      <Col xs="6" md="4" lg="4" xl="4" className="swot">
                        <img src={googleDrive} id="competitive-image" />
                        <div className="caption">Strengths</div>
                        <div className="content-body" id="subCaption">Generous amounts of free storage</div>
                        <div className="content-body" id="subCaption">Supports real time collaboration</div>
                        <div className="caption">Weaknesses</div>
                        <div className="content-body" id="subCaption">Multiple apps are needed for creating content</div>
                        <div className="content-body" id="subCaption">Works best with other google products</div>
                        <div className="caption">Opportunities</div>
                        <div className="content-body" id="subCaption">Making it OS agnostic </div>
                        <div className="content-body" id="subCaption">Easy to share with others</div>
                        <div className="caption">Threats</div>
                        <div className="content-body" id="subCaption">Only works well for those who use google products for storage</div>
                        <div className="content-body" id="subCaption">For ease of collaboration, everyone would need a gmail account</div>
                      </Col>
                      <Col xs="6" md="4" lg="4" xl="4" className="swot">
                        <img src={pinterest} id="competitive-image" />
                        <div className="caption">Strengths</div>
                        <div className="content-body" id="subCaption">Allows you to collect things that you find on the internet</div>
                        <div className="content-body" id="subCaption">Visually Driven</div>
                        <div className="caption">Weaknesses</div>
                        <div className="content-body" id="subCaption">You can only store images</div>
                        <div className="content-body" id="subCaption">Limited collaboration</div>
                        <div className="caption">Opportunities</div>
                        <div className="content-body" id="subCaption">Social Networking Site</div>
                        <div className="content-body" id="subCaption">Share Multiple File Types</div>
                        <div className="caption">Threats</div>
                        <div className="content-body" id="subCaption">Only geared for a specific type of audience</div>
                        <div className="content-body" id="subCaption">Outside of images types, nothing else can be shared</div>
                      </Col>
                      <Col xs="6" md="4" lg="4" xl="4" className="swot">
                        <img src={icloud} id="competitive-image" />
                        <div className="caption">Strengths</div>
                        <div className="content-body" id="subCaption">Automatic backups</div>
                        <div className="content-body" id="subCaption">Integrates across all apple devices that you own </div>
                        <div className="caption">Weaknesses</div>
                        <div className="content-body" id="subCaption">Limited Storage</div>
                        <div className="content-body" id="subCaption">Not Collaborative</div>
                        <div className="caption" >Opportunities</div>
                        <div className="content-body" id="subCaption">More space available for free</div>
                        <div className="content-body" id="subCaption">Better understanding of what is being stored. </div>
                        <div className="caption">Threats</div>
                        <div className="content-body" id="subCaption">Information that gets stored that a user can’t easily retrieve</div>
                        <div className="content-body" id="subCaption">Can only view not edit.</div>
                      </Col>
                    </Row>
                  </Fade>
                  </Row>
                  <Row>
                    <Fade>
                    <Col xs="12" sm="9" md="9" lg="9" xl="9">
                    <Content
                      title="User Personas"
                      content="With the information gained from my competitive analysis and my user surveys I was ready to create my user personas, hypothetical archetypes of real users as defined by their goals and frustrations. These personas helped drive the Magneg Solution."
                      id="fullRow"
                    />
                    </Col>
                    </Fade>
                    <Row className="group">
                      <Fade>
                      <Col xs="12" sm="6" md="6" lg="6" xl="6" className="user-persona">
                        <img src={antonia} id="persona-image" />
                        <div className="content-body" id="bio-text">Antonia | Consultant | 24 Years Old</div>
                        <div className="quote">“I’m trying to help my business grow on the go”</div>
                        <div id="user-persona-header">Goals</div>
                        <ul>
                        <li className="bullet-item">To be able to work while traveling to different locations.</li>
                        <li className="bullet-item">To have the ability to create folders to organize her items for each individual client </li>
                        </ul>
                        <div id="user-persona-header">Frustrations</div>
                        <ul>
                        <li className="bullet-item">Compatibility issues with other clients who have different email domains.</li>
                        <li className="bullet-item">Being unable to access her files while not having access to the internet.</li>
                        </ul>
                      </Col>
                      </Fade>
                      <Fade>
                      <Col xs="12" sm="6" md="6" lg="6" xl="6" className="user-persona">
                        <img src={courtney} id="persona-image" />
                        <div className="content-body" id="bio-text">Courtney | Graphic Designer | 30 Years Old</div>
                        <div className="quote">“Easy and seamless transperancy is really important to me.”</div>
                        <div id="user-persona-header">Goals</div>
                        <ul>
                        <li className="bullet-item">Oversee the work that her team members are doing. Have transperancy over how things are being worked on.</li>
                        <li className="bullet-item">Allow the employees to be able to give her quick access to documents</li>
                        </ul>
                        <div id="user-persona-header">Frustrations</div>
                        <ul>
                        <li className="bullet-item">Often feels like her project files are disorganized.</li>
                        <li className="bullet-item">Doesn't have the ability to save things from the web as inspiration </li>
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
                  <Col xs="12"  sm="9" md="9" lg="9" xl="9" style={{marginLeft: "1em"}}>
                    <Content title="User Stories"
                      content="While keeping our personas in mind, we focused on outlining the features that this new application would need to have by creating user stories. I focused on the high and medium priority items in order to create the Minimum Viable Product (MVP) "
                      id="fullRow"
                        />
                  </Col>
                  </Fade>
                  </Row>

                  <Row className="group" id="userStories">
                  <Fade>
                    <Col xs="6" sm="3" md="2" lg="2" xl="2" className="user-story">
                      <img src={persona} id="user-flow-image"/>
                      <div className="content-body" id="story-caption">"I want to access my account"</div>
                    </Col>
                    <Col xs="6" sm="3" md="2" lg="2" xl="2" className="user-story">
                      <img src={persona} id="user-flow-image"/>
                      <div className="content-body" id="story-caption">"I want to create content"</div>
                    </Col>
                    <Col xs="6" sm="3" md="2" lg="2" xl="2" className="user-story">
                      <img src={persona} id="user-flow-image"/>
                      <div className="content-body" id="story-caption">“I want to share content with others.”</div>
                    </Col>
                    </Fade>
                  </Row>
                  <Fade>
                  <Row className="group" style={{paddingBottom: "1.5em"}} id="userStories">
                    <Col xs="6" sm="3" md="2" lg="2" xl="2" className="user-story">
                      <img src={persona} id="user-flow-image"/>
                      <div className="content-body" id="story-caption">"I want to upload content."</div>
                    </Col>
                    <Col xs="6" sm="3" md="2" lg="2" xl="2" className="user-story">
                      <img src={persona} id="user-flow-image"/>
                      <div className="content-body" id="story-caption">"I want to organize content"</div>
                    </Col>
                    <Col xs="6" sm="3" md="2" lg="2" xl="2" className="user-story">
                      <img src={persona} id="user-flow-image"/>
                      <div className="content-body" id="story-caption">“I want to collaborate in real-time.”</div>
                    </Col>
                  </Row>
                  </Fade>
                  </Row>
                  <Row>
                    <Fade>
                    <Col xs="12"  sm="9" md="9" lg="9" xl="9">
                    <Content
                      title="Sketches & Wireframes"
                      content="Once we have an understanding of how we want this mobile application to flow, we then proceeded to begin focusing more on design. I first began sketching by hand to formulate a general idea and then transitioned into build low-fi digital wireframes. Usability testing was conducted in person testing users ability to upload a file, organize a file, and create an account with a clickable low-fi prototype. Overall the results were positive stating that the only roadblock was to make the buttons stand out and to make the organize a file option more clear."
                      id="fullRow"
                    />
                    </Col>
                      </Fade>
                      <Fade>
                    <Row style={{marginLeft: "10%"}}>
                    <Col xs="12" sm="9" md="9" lg="9" xl="9">
                    <img src={sketches} id="wireframes"/>
                    </Col>
                      <Col xs="12" sm="9" md="9" lg="9" xl="9">
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
                        <Col xs="12" sm="9" md="9" lg="9" xl="9">
                          <ContentImage
                            title="Logo & Naming"
                            content="Magneg aims to portray that is fun, reliable and collaborative. It is the one-stop shop for the people both create and collaborate. We wanted to use an icon that represents attraction because the aim is for people to be drawn to use Magneg instead of other cloud-sharing services. When we think of attraction, we think of magnets. We chose to use something that was a play on the word magnet, and thus Magneg was born."
                            image={magnegSketches}
                            id="fullRow"
                          />
                        </Col>
                        </Fade>

                        <Col xs="12"  sm="9" md="9" lg="9" xl="9">
                        <Fade>
                        <Content
                          title="Branding"
                          content="Before jumping into the design, we wanted to determine the overall look and feel for the app. We wanted it to be colorful, but also present a very minimalistic look and feel for the design. We chose to use more cool colors that symbolize reliability and trust within the platform. We chose to pair the fonts Karla and Montserrat because we felt that they gave a more fun and collaborative mood."
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
                <div className="main-subText" id="section-header">Testing</div>
                </Slide>
                <Row>
                <Fade>
                <Col xs="12" sm="9" md="9" lg="9" xl="9" style={{marginLeft: "1em"}}>
                  <Content title="Usability Testing"
                    id="fullRow"
                    content="We first began testing with the wireframes. By testing these wireframes first, we are able to see if we are making the right design decisions before adding more visuals. Based on these results, it was evident that the we need to make the action upload account more clear." />
                </Col>
                </Fade>
                  <Flip top>
                  <Row className="group">
                    <Col xs="12" md="4" lg="4" xl="4" style={{textAlign: "center"}}>
                    <PieChartMetric
                        pieChart={totalPercent}
                        percentage="100%"
                        text="of participants were able to successfully create an account." />
                    </Col>
                    <Col xs="12" md="4" lg="4" xl="4" style={{textAlign: "center"}}>
                    <PieChartMetric
                        pieChart={seventyFivePercent}
                        percentage="75%"
                        text="of participants were able to successfully upload content." />
                    </Col>
                    <Col xs="12" md="4" lg="4" xl="4" style={{textAlign: "center"}}>
                    <PieChartMetric
                        pieChart={totalPercent}
                        percentage="100%"
                        text="of participants were able to upload content." />
                    </Col>
                  </Row>
                  </Flip>
                  </Row>
                  <Row>
                    <Fade>
                    <Col xs="12" sm="9" md="9" lg="9" xl="9" style={{marginLeft: "1em"}}>
                      <Content title="Preference Testing"
                        id="fullRow"
                        content="Keeping our color palette and typography in mind. We gathered participants to determine which color scheme and design appealed to the majority of our testers." />
                    </Col>
                    </Fade>
                    <Row style={{marginLeft: "10%", width: "80%"}}>
                        <Col xs="12" md="6" lg="6" xl="6" className="preference-test">
                        <Fade>
                          <img src={landingA} id="mockup" />
                          </Fade>
                          <Fade>
                          <div id="usability-testing" style={{width: "70%", paddingLeft: "1em"}}>
                            <div className="caption" id="testerPercentage">75%</div>
                            <div className="content-body" id="tester"> of testers preferred the lighter color scheme. </div>
                          </div>
                          </Fade>
                        </Col>
                        <Fade>
                        <Col xs="12" md="6" lg="6" xl="6" className="preference-test">
                          <img src={landingB} id="mockup" />
                        </Col>
                        </Fade>
                      </Row>
                      <Row style={{marginLeft: "10%", width: "80%", marginTop: "2%"}}>
                          <Fade>
                          <Col xs="12" md="6" lg="6" xl="6" className="preference-test">
                            <img src={loginA} id="mockup" />
                            <div id="usability-testing" style={{width: "70%", paddingLeft: "1em"}}>
                            </div>
                          </Col>
                          </Fade>
                          <Col xs="12" md="6" lg="6" xl="6" className="preference-test">
                            <Fade>
                              <img src={loginB} id="mockup" />
                            </Fade>
                              <Fade>
                            <div id="usability-testing" style={{width: "70%", paddingLeft: "1em"}}>
                            <div className="caption" id="testerPercentage">60%</div>
                            <div className="content-body" id="tester"> of testers preferred the buttons to be seperated from each other.</div>
                            </div>
                            </Fade>
                          </Col>
                      </Row>
                      <Row style={{marginLeft: "10%", width: "80%", marginTop: "2%"}}>
                          <Col xs="12" md="6" lg="6" xl="6" className="preference-test">
                            <Fade>
                            <img src={dashboardA} id="mockup" />
                            </Fade>
                            <Fade>
                            <div id="usability-testing" style={{width: "70%", paddingLeft: "1em"}}>
                            <div className="caption" id="testerPercentage">50%</div>
                            <div className="content-body" id="tester"> of testers preferred the buttons to be in its own menu rather than at the bottom.</div>
                            </div>
                            </Fade>
                          </Col>
                            <Fade>
                          <Col xs="12" md="6" lg="6" xl="6" className="preference-test">
                            <img src={dashboardB} id="mockup" />
                          </Col>
                          </Fade>
                      </Row>
                  </Row>
              </Row>
              <Row>
                <Slide top cascade>
              <div className="main-subText" id="section-header">Final Designs</div>
              </Slide>
              <Fade>
              <Col xs="12" sm="9" md="9" lg="9" xl="9">
                <ContentButton title="High-Definition Mockups"
                  content="Taking in the concluding results of the preference and usability tests and the personas from the very beginning, it's time to finalize the designs. We went through several iterations to get to the finalized solution that is clean, simple and solves our original problem. The prototype was created using Figma."
                  buttonText="View Prototype"
                  buttonLink="https://www.figma.com/proto/MLLZbAK70j2aG3NCv8Lad28h/Finishing-Touches?node-id=140%3A2&viewport=2036%2C1388%2C0.5&scaling=scale-down"
                  id="fullRow"
                    />
              </Col>
              </Fade>

              <Row style={{marginLeft: "20%"}}>
              <img src={mockups} id="magnegMockups" />
              </Row>
              <Row>
                <Slide top cascade>
                <div className="main-subText" id="section-header">Conclusion</div>
                </Slide>
                <Col xs="12" sm="9" md="9" lg="9" xl="9">
                <Fade>
                <Content
                  title="Refections"
                  content="Going through the entire process of designing a product from scratch to prototype was an exciting, challenging and rewarding experience. Each of these steps were necessary in order to design the perfect product that will make change within the market."
                  id="fullRow"
                />
                </Fade>
                <Fade>
                  <Content title=""
                    content="Looking back, we should've spent more time during the User Research phase. While it's great to compare big-named platforms, there are other smaller companies that are trying to infiltrate the market. For example, we would've maybe compared Notion to Google Drive when doing a SWOT analysis. "
                    id="fullRow"
                      />
                </Fade>
                <Fade>
                    <Content title=""
                      content="We also should have spent more time exploring different ideas and possibilities of cloud storage as well as play around more with different designs and color schemes. We also should've started designing for a desktop application first."
                        id="fullRow"
                        />
                </Fade>
                </Col>
                <Fade>
                <Col xs="12" sm="9" md="9" lg="9" xl="9">
                <Content
                  title="Next Steps"
                  content="The prototype is ready to be taken to the front-end engineers to begin development. Additionally work can begin on designing and prototyping a desktop version of this application."
                  id="fullRow"
                />
                </Col>
                </Fade>
              </Row>
              </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default MagnegPage;
