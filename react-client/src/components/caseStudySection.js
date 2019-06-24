import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import {Button} from 'reactstrap';


export const CaseStudySection  = ({projectName, projectDescription, caseStudyLink, image, role}) => {
    return (
    <Grid columns={2} style={{marginBottom: "10%"}} centered stackable>
        <Grid.Column largeScreen={6} mobile={12} tablet={12}> 
          <Image src={image} id="case-study-image"/>
        </Grid.Column>
        <Grid.Column largeScreen={6} mobile={12} tablet={12} className="case-study-project-description">
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
      <Grid.Column largeScreen={6} mobile={12} tablet={12}> 
        <Image src={image} id="case-study-image"/>
      </Grid.Column>
      <Grid.Column largeScreen={6} mobile={12} tablet={12} className="case-study-project-description">
      <div className="main-subText" id="long-project-name"> {projectName} </div>
        <div className="content-body" id="case-study-role">
          {role}
        </div>
        <div className="content-body" id="case-study-description">
           {projectDescription}
        </div>
        <div style={{textAlign: "left"}}> 
            <a href={caseStudyLink} target="_blank">
              <Button className="action-button" size="md" style={{marginTop: "0em"}} id="case-study-button">
                View Website
              </Button>
            </a>
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
