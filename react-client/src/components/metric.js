import React, { Component } from 'react';
import {Card, Button, CardBody, Col, Row, CardTitle} from 'reactstrap';


export const PieChartMetric = ({pieChart, percentage, text}) =>{
  return(
    <div className="pie-chart-metric">
        <div id="pie-chart"><img src={pieChart}/></div>
        <div className="caption" id="percentage">{percentage}</div>
        <div className="caption2" id="disclaimer">{text}</div>
    </div>
  );
};
