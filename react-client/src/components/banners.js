import React, { Component } from 'react';
import {Row, Col, Button} from 'reactstrap';
import { Image, Container, Grid } from 'semantic-ui-react'

export const Banner = ({backgroundColor, headerText, subText}) => {
  return (
    <Container className={backgroundColor}>
      <div className="indented-section" id="header-section" style={{textAlign: "center"}}>
        <div className="main-headerText" >{headerText}</div>
        <div className="main-subText">{subText}</div>
      </div>
    </Container>
  );
};

export const BannerLinkImage = ({headerText, subText, role, buttonText, newWindow, buttonLink, image, imageId, background, tools, duration, deliverables}) => {
  return (
    <Container >
      <Grid columns={2}>
      <Grid.Column largeScreen={6} mobile={12} tablet={12} className="header-container">
      <div>
                  <div className="main-headerText">{headerText}</div>
                  <div className="main-subText">{subText}</div>
                  <div className="main-subText" style={{marginTop: "1.5em"}}><span className="emphasis">Role: </span> {role}</div>
                  <div className="main-subText" style={{marginTop: "1.5em", fontStyle: "italic", fontSize: "16px"}}>{background}</div>
                  {
                    newWindow &&
                    <a href={buttonLink} target="_blank">
                      <Button className="action-button" id="banner-button" size="lg" style={{marginBottom: "1.5em"}}>{buttonText}</Button>
                    </a>
                  }
                  {
                    !newWindow&&
                    <a href={this.state.buttonLink}>
                      <Button className="action-button" id="banner-button" size="lg" style={{marginBottom: "1.5em"}}>{buttonText}</Button>
                    </a>
                  }
                </div>
      </Grid.Column>
      <Grid.Column>
           <Image src={image} id={imageId} />
      </Grid.Column>
      </Grid>
      <Grid columns={3} className="header-container">
          <Grid.Column largeScreen={4} mobile={12} tablet={4} className="first">
            <div className="main-subText" style={{marginTop: "1.5em"}}>
                <span className="emphasis">Duration: </span> <br />{duration}
              </div>
          </Grid.Column>
          <Grid.Column largeScreen={4} mobile={12} tablet={4}>
               <div className="main-subText" style={{marginTop: "1.5em"}}><
                 span className="emphasis">Tools: </span> <br />
                 {tools}</div>
          </Grid.Column>
          <Grid.Column largeScreen={4} mobile={12} tablet={4}>
              <div className="main-subText" style={{marginTop: "1.5em"}}>
                <span className="emphasis">Deliverables: </span> <br />{
                  deliverables}
                  </div>
          </Grid.Column>
      </Grid>
    </Container>
    // <div className={backgroundColor} style={{marginTop: "5em"}}>
    //     <Row className="banner"> 
    //       <Col xs="12" m="6" lg="6" xl="6" className="banner-description">
            // <div id="header-section">

            //   </div>
    //       </Col>
    //       <Col xs="12" m="6" lg="6" xl="6">
    //         <div>

    //         </div>
    //       </Col>
    //     </Row>
    //     <Row className="indented-section" id="details">
    //     <Col xs="12" sm="12" m="4" lg="4" xl="4">
    //       
    //     </Col>
    //     <Col xs="12" sm="12" m="4" lg="4" xl="4">
    //      
    //     </Col>
    //     <Col xs="12" sm="12" m="4" lg="4" xl="4">
    //       <div className="main-subText" style={{marginTop: "1.5em"}}><span className="emphasis">Deliverables: </span> <br />{deliverables}</div>
    //     </Col>
    //     </Row>
    // </div>
  );
};

