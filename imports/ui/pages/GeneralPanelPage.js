import React from 'react';
import { Grid, Row, Col, Panel, Table, Button, Jumbotron } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import SuperNavBar from '../components/SuperNavBar';

const GeneralPanelPage = () => (
  <Grid>
    <SuperNavBar />
    <Jumbotron>
      <JumbotronTitle>Panel general</JumbotronTitle>
      <JumbotronParagraph>
        Estadísticas generales sobre matches y usuarios en juego
      </JumbotronParagraph>
    </Jumbotron>
    <Row className="show-grid">
      <Col sm={6} md={4}>
        <Panel bsStyle="info">
          <Panel.Heading>
            <Panel.Title componentClass="h1">
              <Row>
                <FontAwesome name="calendar" size="3x" />
              </Row>
              <Row>
                <h1> <strong> 15 </strong> </h1>
              </Row>
              <Row>
                <h3> matches para hoy! </h3>
              </Row>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Table responsive>
              <thead>
                <tr>
                  <th>Club</th>
                  <th>Cancha</th>
                  <th>Bloque</th>
                  <th>Jug.1</th>
                  <th>Jug.2</th>
                  <th>Árbitro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CP</td>
                  <td>C02</td>
                  <td>1</td>
                  <td>Andrés Biggs</td>
                  <td>Verónica Sutil</td>
                  <td>Juan Pérez</td>
                </tr>
                <tr>
                  <td>CP</td>
                  <td>C05</td>
                  <td>3</td>
                  <td>Matías Sutil</td>
                  <td>Augusto McIver</td>
                  <td>José Nuñez</td>
                </tr>
                <tr>
                  <td>CSU</td>
                  <td>C03</td>
                  <td>5</td>
                  <td>Cristián Austin</td>
                  <td>Cristóbal Izquierdo</td>
                  <td>José Nuñez</td>
                </tr>
              </tbody>
            </Table>
            <Button bsStyle="primary">Ver detalles</Button>
          </Panel.Body>
        </Panel>
      </Col>
      <Col sm={6} md={4}>
        <Panel bsStyle="success">
          <Panel.Heading>
            <Panel.Title componentClass="h1">
              <Row>
                <FontAwesome name="bell" size="3x" />
              </Row>
              <Row>
                <h1> <strong> 7 </strong> </h1>
              </Row>
              <Row>
                <h3> matches jugándose! </h3>
              </Row>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Table responsive>
              <thead>
                <tr>
                  <th>Club</th>
                  <th>Cancha</th>
                  <th>Bloque</th>
                  <th>Jug.1</th>
                  <th>Jug.2</th>
                  <th>Árbitro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CP</td>
                  <td>C02</td>
                  <td>1</td>
                  <td>Andrés Biggs</td>
                  <td>Verónica Sutil</td>
                  <td>Juan Pérez</td>
                </tr>
                <tr>
                  <td>CP</td>
                  <td>C05</td>
                  <td>3</td>
                  <td>Matías Sutil</td>
                  <td>Augusto McIver</td>
                  <td>José Nuñez</td>
                </tr>
                <tr>
                  <td>CSU</td>
                  <td>C03</td>
                  <td>5</td>
                  <td>Cristián Austin</td>
                  <td>Cristóbal Izquierdo</td>
                  <td>José Nuñez</td>
                </tr>
              </tbody>
            </Table>
            <Button bsStyle="success">Ver detalles</Button>
          </Panel.Body>
        </Panel>
      </Col>
      <Col sm={6} md={4}>
        <Panel bsStyle="warning">
          <Panel.Heading>
            <Panel.Title componentClass="h1">
              <Row>
                <FontAwesome name="child" size="3x" />
              </Row>
              <Row>
                <h1> <strong> 30 </strong> </h1>
              </Row>
              <Row>
                <h3> nuevos usuarios este mes! </h3>
              </Row>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Table responsive>
              <thead>
                <tr>
                  <th>Inscripción</th>
                  <th>Nombre</th>
                  <th>Nivel</th>
                  <th>Sexo</th>
                  <th>Edad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>02/04/2018</td>
                  <td>Manuel Olavarría</td>
                  <td>A</td>
                  <td>M</td>
                  <td>42</td>
                </tr>
                <tr>
                  <td>06/04/2018</td>
                  <td>Franscisco Echeñique</td>
                  <td>C</td>
                  <td>M</td>
                  <td>28</td>
                </tr>
                <tr>
                  <td>12/04/2018</td>
                  <td>Antonia Biggs</td>
                  <td>C</td>
                  <td>F</td>
                  <td>19</td>
                </tr>
              </tbody>
            </Table>
            <Button bsStyle="warning">Ver detalles</Button>
          </Panel.Body>
        </Panel>
      </Col>
    </Row>
  </Grid>
);

export default GeneralPanelPage;

const JumbotronTitle = styled.h1`
  text-align: left;
`;
const JumbotronParagraph = styled.p`
  text-align: left;
`;