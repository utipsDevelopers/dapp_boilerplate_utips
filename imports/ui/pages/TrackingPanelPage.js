import React from 'react';
import { Grid, Row, Col, Panel, Table, Button, Jumbotron } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import SuperNavBar from '../components/SuperNavBar';
import TrackingTable from '../components/TrackingTable';

const TrackingPanelPage = () => (
  <Grid>
    <SuperNavBar />
    <Jumbotron>
      <JumbotronTitle>Trading & Ownership Tracking</JumbotronTitle>
      <JumbotronParagraph>
        Certificate of Origin Tracking System
      </JumbotronParagraph>
    </Jumbotron>
    <Row>
      <TrackingTable />
    </Row>
  </Grid>
);

export default TrackingPanelPage;

const JumbotronTitle = styled.h1`
  text-align: left;
`;
const JumbotronParagraph = styled.p`
  text-align: left;
`;