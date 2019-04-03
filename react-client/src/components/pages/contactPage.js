import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle, Form, FormGroup, Label, Input} from 'reactstrap';
import NavBar from '../headerComponent/navBar';
import Footer from '../footerComponent/footer';
import { Link } from 'react-router-dom';
import Banner from '../common/banner';
import Content from '../common/content';

class ContactPage extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
        <NavBar headerId="contact-banner" />
        <Banner
          backgroundColor="contact-banner"
          headerText="Contact"
          subText="Interested in Collaborating? Let's talk more." />
          <div className="main-content">
          <Form style={{marginTop: "1.5em", marginLeft: "33%"}} method="POST" action="https://formspree.io/ademusoyo@gmail.com" target="_blank">
          <FormGroup row>
            <Label for="name" className="form-label">Name</Label>
                <Input type="text" name="name" id="contactName" style={{width: "65%"}} />
            </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" className="form-label">Email Address</Label>
                <Input type="email" name="email" id="contactEmail" style={{width: "65%"}} />
          </FormGroup>
          <FormGroup style={{marginLeft: "-1em"}}>
            <Label for="message" className="form-label">Message</Label>
                <Input type="textarea" name="message" id="contactMessage" rows="10" style={{width: "65%"}}/>
            </FormGroup>
            <Button type="submit" className="action-button" size="lg" style={{marginRight: "35%", float: "right", marginBottom: "1.5em"}}>Submit</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default ContactPage;
