import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function PublicNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About R2E</Nav.Link>
            <Nav.Link href="#pricing">Candidates Watch</Nav.Link>
            <Nav.Link href="#pricing">Issues</Nav.Link>
            <NavDropdown
                id="nav-dropdown-dark-example"
                title="Live Results"
            >
                <NavDropdown.Item href="#action/3.1">Presidential Elections</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Gubernatorial Elections</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Senate Elections</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">House of Rep Elections</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PublicNavbar;