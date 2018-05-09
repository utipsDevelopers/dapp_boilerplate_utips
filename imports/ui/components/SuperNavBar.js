import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';

const SuperNavBar = () => (
  <AppHeader>
    <NavBarStyle inverse collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            engieFactory
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Juan Perez
          </NavItem>
        </Nav>
        <Nav pullRight>
          <LinkContainer to="/reporting">
            <NavItem eventKey={2}>
              <FontAwesome name="home" /> Reporting
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/tracking">
            <NavItem eventKey={3}>
              <FontAwesome name="flag" /> Tracking
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/retirement">
            <NavItem eventKey={4}>
              <FontAwesome name="users" /> Retirement
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/">
            <NavItem eventKey={4}>
              <FontAwesome name="sign-out" /> Logout
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </NavBarStyle>
  </AppHeader>
);

export default SuperNavBar;

const AppHeader = styled.header`
    padding: 40px;
`;

const NavBarStyle = styled(Navbar)`
    border-color: rgba(34, 34, 34, 0.05);
    -webkit-transition: all .35s;
    -moz-transition: all .35s;
    transition: all .35s;
    font-family: 'Helvetica', 'Arial', 'sans-serif';
    font-weight: 100;
    font-size: 14px;
`;

const Logo = styled.img` 
    max-width: 100%; 
    max-height: 100%;
`;
