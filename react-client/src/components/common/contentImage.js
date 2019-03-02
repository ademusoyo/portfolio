import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle} from 'reactstrap';

class ContentImage extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content,
      image: this.props.image
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
      </div>
    )
  }
}

export default ContentImage;
