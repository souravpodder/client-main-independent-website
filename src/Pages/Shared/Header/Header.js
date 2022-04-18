import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {

  // get the user if logged in 
  const [user] = useAuthState(auth);
  // handle user sign out 
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark" >
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

              {/* display the login or sign out using conditional rendering  */}

              {
                user ? <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button> :
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
              }


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;