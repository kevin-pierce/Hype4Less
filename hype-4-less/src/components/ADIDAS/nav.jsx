import React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

const AdidasProdNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/adidas">All</Nav.Link>
                    <Nav.Link href="/adidas/originals">Originals</Nav.Link>
                    <Nav.Link href="/adidas/running">Running</Nav.Link>
                    <Nav.Link href="/adidas/tiro">Tiro</Nav.Link>
                </Nav>
                <Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AdidasProdNav;