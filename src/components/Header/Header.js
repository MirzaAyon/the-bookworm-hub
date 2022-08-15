import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo.png";

import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="fw-bolder">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top me-1"
            />
            The Bookworm Hut
          </Navbar.Brand>
          <Nav className="ms-auto fw-bold">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#features">Shop</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#review" >Review</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Premium Books</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Choosed Books
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Information</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Promo
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
