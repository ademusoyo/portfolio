import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';

class Project extends Component {

  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <Col xs="12" m="3" lg="3" xl="3">
          <img src={Magneg} alt="Magneg" />
        </Col>
        <Col xs="12" m="3" lg="3" xl="3">
          <span className="project-header">Magneg</span>
          <div className="project-subText">
            A new cloud storage mobile application that
            allows users to create, store and collaborate all in one platform.
          </div>
          <div className="project-role">
            Role: User Reasearch, Protoyping, Design, Brand Identity
          </div>
          <Button className="action-button" size="lg">View Case Study</Button>
        </Col>
      </div>
    )
  }
}

export default Project;
