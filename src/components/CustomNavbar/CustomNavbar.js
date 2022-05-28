import "./CustomNavbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { faBars } from "@fortawesome/fontawesome-free-solid";

export default function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">Buildoor</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggle"
        >
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#deets">About Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button className="cstm-nav-btn">Enter</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
