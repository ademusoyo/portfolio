import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';

class Banner extends Component {

  constructor(props){
    super(props);
    this.state = {
      backgroundColor: this.props.backgroundColor,
      headerText: this.props.headerText,
      subText: this.props.subText,
      image: this.props.image,
    }

  }

  render() {
    return (
      <div className={this.state.backgroundColor}>
        <Row>
        <div className="indented-section" id="header-section">
          <div className="main-headerText">{this.state.headerText}</div>
          <div className="main-subText">{this.state.subText}</div>
        </div>
        </Row>
      </div>
    )
  }
}

export default Banner;
