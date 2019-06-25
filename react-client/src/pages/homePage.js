import React, { Component } from 'react';
import {CaseStudySection, ViewWebsite} from '../components/caseStudySection';
import { Image, Container, Grid } from 'semantic-ui-react'
import me from  '../images/me2.png';
import magnegHome from '../images/magneg/homepage.png'
import travelixHome from '../images/travelix/homepage.png'
import MacScientists from '../images/macscientists.png'
import societyxTechHome from '../images/societyxtech/homepage.png'



class HomePage extends Component {
  render() {
    return (
      <div>
        <Container textAlign="center">
          <Image src={me} id="my-hero-image" />
          <div className="main-headerText" id="homepage-header-text">Hi. I'm <span className="emphasis"> Ademusoyo. </span></div>
          <div className="main-subText" id="homepage-header-sub-text">I'm a <span className="emphasis">software engineer</span> and <span className="emphasis">designer</span> based in <span className="emphasis">NYC.</span>
              <br /> I'm passionate about designing and developing <span className="emphasis">socially conscious</span> solutions.</div>
        </Container>
        <Container textAlign="center">
            <div className="main-subText" id="section-header"> Recent Projects </div>
            <Grid columns={1}>
            <Grid.Row>
                <Grid.Column>
                <CaseStudySection projectName="Society x Tech"
                    projectDescription="Society x Tech is a monthly newsletter discussing the societal implications of technology trends through a hand-picked curation of articles, podcasts, books and interviews."
                    role="Branding • Product Design • Web Development"
                    caseStudyLink="/societyxtech"
                    image={societyxTechHome}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                <CaseStudySection projectName="Travelix"
                    projectDescription="Travelix empowers you to discover new places and dream up your next travel destination."
                    role="UX Research •  Branding • Product Design"
                    caseStudyLink="/travelix"
                    image={travelixHome}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
              <Grid.Column>
                <ViewWebsite projectName="MacScientists"
                    projectDescription="MacScientists is a platform committed to uplifting women of color and changing the face of STEM."
                    caseStudyLink="https://www.macscientists.com/"
                    role="Branding •  Product Design • Development"
                    image={MacScientists}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
              <Grid.Column>
                <CaseStudySection projectName="Magneg"
                    projectDescription="Magneg is a cloud storage mobile application that allows users to create, store and collaborate all in one platform."
                    caseStudyLink="/magneg"
                    role="UX Research •  Branding • Product Design"
                    image={magnegHome}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </Container>
      </div>
    )
  }
}

export default HomePage;
