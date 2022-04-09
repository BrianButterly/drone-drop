import React from "react";

import { Container, Navbar, Nav } from "react-bootstrap";

function Menu() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src="logo.png" alt="drone logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
