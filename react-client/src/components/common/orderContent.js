import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle} from 'reactstrap';

class OrderContent extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content
    }
  }

  render() {
    return (
      <div>
            <div className="content-header">{this.state.title} </div>
            <div className="content-body" style={{width: "80%"}}>
                this.state.content.map()
            </div>
      </div>
    )
  }
}

export default OrderContent;
