import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle} from 'reactstrap';


export const Content = ({title, content, id}) =>{
  return (
    <div className="content" id={id}>
          <div className="content-header">{title} </div>
          <div className="content-body">
              {content}
          </div>
    </div>
  );
};

export const ContentButton = ({title, content, buttonLink, buttonText, id}) =>{

  return (
    <div className="content" id={id}>
          <div className="content-header">{title} </div>
          <div className="content-body">
              {content}
          </div>
          <div>
            <a href={buttonLink} target="_blank">
              <Button className="action-button" size="lg">{buttonText}</Button>
            </a>
          </div>
    </div>
  );

};

export const ContentButtonLinkImage = ({title, content, image, buttonLink, buttonText, id, imageId, caption}) =>{
  return (
    <div className="content" id={id}>
          <div className="content-header">{title} </div>
          <div className="content-body">
              {content}
          </div>
          <div>
            <a href={buttonLink} target="_blank">
              <Button className="action-button" size="lg" style={{marginBottom: "10%"}}>{buttonText}</Button>
            </a>
          </div>
          <div className="content-image-button">
            <img src={image} id={imageId} />
            <div className="caption2">{caption}</div>
          </div>
    </div>
  );
};

export const ContentImage = ({title, content, image, id, imageId, caption}) =>{
  return (
  <div className="content" id={id}>
          <div className="content-header">{title} </div>
          <div className="content-body">
              {content}
          </div>
          <div style={{textAlign: "left"}} className="content-image">
            <img src={image} id={imageId} />
            <div className="caption2">{caption}</div>
          </div>
    </div>
  );
}
