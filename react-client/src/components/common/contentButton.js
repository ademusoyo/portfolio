import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle} from 'reactstrap';

class ContentButton extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content,
      buttonText: this.props.buttonText,
      buttonLink: this.props.buttonLink
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
              <a href={this.state.buttonLink} target="_blank">
                <Button className="action-button" size="lg">{this.state.buttonText}</Button>
              </a>
            </div>
      </div>
    )
  }
}

export default ContentButton;
