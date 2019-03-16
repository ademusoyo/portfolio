import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle} from 'reactstrap';

class ContentButtonLinkImage extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content,
      image: this.props.image,
      buttonLink: this.props.buttonLink,
      buttonText: this.props.buttonText
    }
  }

  render() {
    return (
      <div>
            <div className="content-header">{this.state.title} </div>
            <div className="content-body" style={{width: "80%"}}>
                {this.state.content}
            </div>
            <div>
              <img src={this.state.image} className="content-image" />
            </div>
            <div>
              <a href={this.state.buttonLink} target="_blank">
                <Button className="action-button" size="lg" style={{marginBottom: "10%"}}>{this.state.buttonText}</Button>
              </a>
            </div>
      </div>
    )
  }
}

export default ContentButtonLinkImage;
