import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle} from 'reactstrap';


export const PieChartMetric = ({pieChart, percentage, text}) =>{
  return(
    <div>
        <div id="pie-chart"><img src={pieChart}/></div>
        <div id="caption">{percentage}</div>
        <div id="caption2">{text}</div>
    </div>
  );
};
