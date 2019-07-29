import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import {Step} from "../components/caseStudySection";
import {Button } from 'reactstrap';


class DesignProcessPage extends Component {
  render() {
    return (
      <div className="indented-section">
        <div className="main-subText" id="home-section-header" style={{paddingTop: "1em"}}> Design Process </div>
          <Grid columns={2} className="page-grid">
            <Grid.Row>
              <Grid.Column largeScreen={8} mobile={12} tablet={8} width={8} computer={8} >
                <div className="main-subText" id="big-subtext" style={{fontSize: "30px", paddingRight: "0%", paddingLeft: "10%"}}> <span className="emphasis">Passionate</span> about designing and engineering <span className="emphasis">socially conscious</span> solutions.</div>
              </Grid.Column>
              <Grid.Column largeScreen={4} mobile={12} tablet={4} width={4} computer={4}>   
              </Grid.Column>
              <Grid.Column largeScreen={6} mobile={6} tablet={6} computer={6} >
                  <Step number="01."
                        role="Understanding"
                        description="I take the time to understand you're problem engaging and setting the tone for a collaborative experience."
                   />
              </Grid.Column>
              <Grid.Column largeScreen={6} mobile={6} tablet={6}  computer={6}>
                  <Step number="02."
                        role="Propsal"
                        description="Once I have an understanding of your problem, I provide you with a proposal of the steps needed to reach your solution. Once we're in agreement, we can begin the work. "
                   />
              </Grid.Column>
              <Grid.Column largeScreen={6} mobile={6} tablet={6} computer={6} >
                  <Step number="03."
                        role="Ideate"
                        description="Now, I start sketching and wireframing different ideas based on a combination of competitive analysis, user personas, and user flows."
                   />
              </Grid.Column>
              <Grid.Column largeScreen={6} mobile={6} tablet={6}  computer={6}>
                  <Step number="04."
                        role="Iterate"
                        description="Together, we use the wireframes/sketches to make sure we're on the same page. This could take a couple times, however, it isn't a problem."
                   />
              </Grid.Column>
              <Grid.Column largeScreen={6} mobile={6} tablet={6} computer={6} >
                  <Step number="05."
                        role="Branding"
                        description="Before we can bring our ideas to life, we need to determine a brand identity. Through this I will get a better understanding of what you want your product to be and construct different color palettes that I think would be a good fit in telling your story."
                   />
              </Grid.Column>
              <Grid.Column largeScreen={6} mobile={6} tablet={6}  computer={6}>
                  <Step number="06."
                        role="Design"
                        description="Now we bring our lo-fi wireframes with our color and real-life images. It's here that we will see how things will look on a phone or computer."
                   />
              </Grid.Column>
              <Grid.Column largeScreen={6} mobile={6} tablet={6} computer={6} >
                  <Step number="07."
                        role="Development."
                        description="Finally, I develop functional prototypes and deliver finished products through frontend development."
                   />
              </Grid.Column>
              <Grid.Column largeScreen={12} mobile={12} tablet={12} textAlign="center" style={{marginTop: "1em", marginBottom: "4em"}}>
              <div className="main-subText" style={{fontSize: "30px"}}>
                Think we could work well together?
              </div>
              <Button className="action-button" size="lg" style={{marginTop: "2em"}}>
                  Email Me
                </Button>
              </Grid.Column>
            </Grid.Row>

          </Grid>
      </div>
    )
  }
}

export default DesignProcessPage;