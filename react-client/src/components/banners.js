import React, { Component } from 'react';
import {Row, Col, Button} from 'reactstrap';

export const Banner = ({backgroundColor, headerText, subText}) => {
  return (
    <div className={backgroundColor}>
      <Row>
      <div className="indented-section" id="header-section" style={{textAlign: "center"}}>
        <div className="main-headerText" >{headerText}</div>
        <div className="main-subText">{subText}</div>
      </div>
      </Row>
    </div>
  );
};

export const BannerLink = ({backgroundColor, headerText, subText, buttonLink, buttonText}) =>{
  return (
    <div className={backgroundColor}>
      <Row>
      <div className="indented-section" id="about-header" style={{textAlign: "center"}}>
          <div className="main-headerText">{headerText}</div>
          <div className="main-subText">{subText}</div>
        <a href={buttonLink} target="_blank">
          <Button className="action-button" size="lg" style={{marginBottom: "1.5em"}} id="banner-button">{buttonText}</Button>
        </a>
      </div>
      </Row>
    </div>
  )
};

export const BannerLinkImage = ({backgroundColor, headerText, subText, role, buttonText, newWindow, buttonLink, image, imageId}) => {
  return (
    <div className={backgroundColor}>
        <Row>
          <Col xs="12" m="6" lg="6" xl="6" className="banner-description">
            <div className="indented-section" id="header-section">
                <div>
                  <div className="main-headerText">{headerText}</div>
                  <div className="main-subText">{subText}</div>
                  <div className="main-subText" style={{marginTop: "1.5em"}}>{role}</div>
                  {
                    newWindow &&
                    <a href={buttonLink} target="_blank">
                      <Button className="action-button" size="lg"  id="banner-button-2" style={{marginBottom: "1.5em"}}>{buttonText}</Button>
                    </a>
                  }
                  {
                    !newWindow&&
                    <a href={this.state.buttonLink}>
                      <Button className="action-button" size="lg"  id="banner-button-2" style={{marginBottom: "1.5em"}}>{buttonText}</Button>
                    </a>
                  }
                </div>
              </div>
          </Col>
          <Col xs="12" m="6" lg="6" xl="6">
            <div>
            <img src={image} className="banner-link-image" id={imageId} />
            </div>
          </Col>
        </Row>
    </div>
  );
};
