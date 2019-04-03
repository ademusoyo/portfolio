import React, { Component } from 'react';
import BannerLinkImage from '../common/bannerLinkImage';
import {Card, Button, CardBody, Col, Row} from 'reactstrap';
import colorLogo from '../../images/color-wheel.png';
import Schedx from '../../images/schedx-card.png';
import NavBar from '../headerComponent/navBar';
import ShortFooter from '../footerComponent/short-footer';
import { Link } from 'react-router-dom';
import me from  '../../images/me2.png';
import linkedIn from '../../images/LinkedIN.png';
import twitter from '../../images/Twitter.png';
import mail from '../../images/Mail.png'
import medium from '../../images/Medium.png'
import github from '../../images/Github.png'



class HomePage extends Component {
  render() {
    return (
      <div>
      <NavBar headerId="homepage" />
        <div className="main-content">

          <BannerLinkImage backgroundColor="homepage-banner"
          headerText={"Hi. I'm Ademusoyo."}
          subText="I'm a full-stack software engineer and designer based in NYC. I work on creating positively impactful products and experiences."
          buttonText="View My Work"
          buttonLink="/work"
          image={me}
          imageId="my-hero-image"
          newWindow={false}
          />
        </div>
      </div>
    )
  }
}

export default HomePage;
