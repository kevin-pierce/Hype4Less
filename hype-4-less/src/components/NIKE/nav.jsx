import React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

const NikeProdNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/nike">All</Nav.Link>
                    <Nav.Link href="/nike/running">Running</Nav.Link>
                    <Nav.Link href="/nike/lifestyle">Lifestyle</Nav.Link>
                    <Nav.Link href="/nike/jordan">Jordan</Nav.Link>
                </Nav>
                <Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NikeProdNav;