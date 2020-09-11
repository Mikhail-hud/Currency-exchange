import React from 'react';
import './Header.css';
import logo from './logo512.png';

import {
  Navbar, 
  Container,
} from 'react-bootstrap';

import Navigation from '../Nav/Nav';


class Header extends React.Component {
  
  render () {

    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark"  className="bar" >
        <Container>
          <Navbar.Brand href="/" >
            <img
              src={logo}
              height="40"
              width="40"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Navigation/>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );

  }
}


export default Header;
