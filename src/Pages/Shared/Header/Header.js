import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">About Me</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;