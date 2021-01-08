import React from "react";
import styled from "styled-components";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";

const NavbarHeader = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/hot">Hot Deals</Nav.Link>
      <Nav.Link href="/upcoming-releases">Releaes</Nav.Link>
      <NavDropdown title="Brands" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/adidas">Adidas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Nike</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Reebok</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavbarHeader;