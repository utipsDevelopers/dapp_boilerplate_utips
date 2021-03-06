import React from 'react';
import { Grid, Row, Col, Panel, Table, Button, Jumbotron } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import SuperNavBar from '../components/SuperNavBar';
import TrackingTable from '../components/TrackingTable';

const ReportingPanelPage = () => (
  <Grid>
    <SuperNavBar />
    <Jumbotron>
      <JumbotronTitle>Reporting</JumbotronTitle>
      <JumbotronParagraph>
        Reporting about Compliance or Disclosure Entity
      </JumbotronParagraph>
    </Jumbotron>
    <Row>
      <TrackingTable />
    </Row>
  </Grid>
);

export default ReportingPanelPage;

const JumbotronTitle = styled.h1`
  text-align: left;
`;
const JumbotronParagraph = styled.p`
  text-align: left;
`;