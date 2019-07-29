import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import {Button} from 'reactstrap';


export const CaseStudySection  = ({projectName, projectDescription, caseStudyLink, image, role}) => {
    return (
    <Grid columns={2} style={{marginBottom: "10%"}} centered stackable>
        <Grid.Column largeScreen={6} mobile={12} tablet={6} computer={6}> 
          <Image src={image} id="case-study-image"/>
        </Grid.Column>
        <Grid.Column largeScreen={6} mobile={12} tablet={6} computer={6} className="case-study-project-description">
        <div className="main-subText" id="project-name"> {projectName} </div>
          <div className="content-body" id="case-study-role">
            {role}
          </div>
          <div className="content-body" id="case-study-description">
             {projectDescription}
          </div>
          <div style={{textAlign: "left"}}> 
              <a href={caseStudyLink}>
                <Button className="action-button" size="md" style={{marginTop: "0em"}} id="case-study-button">
                  View Case Study
                </Button>
              </a>
          </div>
        </Grid.Column>
    </Grid>
    );
};

export const ViewWebsite  = ({projectName, projectDescription, caseStudyLink, image, role}) => {
  return (
  <Grid columns={2} style={{marginBottom: "10%"}} centered stackable>
      <Grid.Column largeScreen={6} mobile={12} tablet={6} computer={6}> 
        <Image src={image} id="case-study-image"/>
      </Grid.Column>
      <Grid.Column largeScreen={6} mobile={12} tablet={6} computer={6} className="case-study-project-description">
      <div className="main-subText" id="long-project-name"> {projectName} </div>
        <div className="content-body" id="case-study-role">
          {role}
        </div>
        <div className="content-body" id="case-study-description">
           {projectDescription}
        </div>
        <div style={{textAlign: "left"}}> 
            <a href={caseStudyLink} target="_blank">
              <Button className="action-button" size="md" style={{marginTop: "0em", paddingLeft: "7%", paddingRight: "7%"}} id="case-study-button">
                View Website
              </Button>
            </a>
        </div>
      </Grid.Column>
  </Grid>
  );
};

export const Step  = ({number, description, role}) => {
  return (
  <Grid columns={1} style={{marginBottom: "10%"}} centered stackable>
      <Grid.Column largeScreen={12} mobile={12} tablet={12} computer={12} className="case-study-project-description">
      <div className="main-subText" id="number" > {number} </div>
        <div className="content-body" id="case-study-role"  style={{marginBottom: "1.1em"}}>
          {role}
        </div>
        <div className="content-body" id="case-study-description">
           {description}
        </div>
      </Grid.Column>
  </Grid>
  );
};


export const CaseStudySectionReverse  = ({projectName, projectDescription, caseStudyLink, image, role}) => {
  return (
  <Grid columns={2} style={{marginBottom: "10%", marginLeft: "17em"}}>
      <Grid.Column largeScreen={6} mobile={12} tablet={12}>
      <div className="main-subText" id="project-name"> {projectName} </div>
        <div className="content-body" id="case-study-role">
          {role}
        </div>
        <div className="content-body" id="case-study-description">
           {projectDescription}
        </div>
        <div style={{textAlign: "left"}}> 
            <a href={caseStudyLink}>
              <Button className="action-button" size="md" style={{marginTop: "0em"}} id="case-study-button">
                View Case Study
              </Button>
            </a>
        </div>
      </Grid.Column>
      <Grid.Column largeScreen={6} mobile={12} tablet={12}> 
        <Image src={image} id="case-study-image" />
      </Grid.Column>
  </Grid>
  );
};
