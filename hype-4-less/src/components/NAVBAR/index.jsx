import React from "react";
import styled from "styled-components";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import icon from "../../img/invertedHype4Less_noText.svg"

const StyledIcon = styled.img`
    opacity:1;
    transition:opacity 0.15s;

    :hover{
        opacity:0.75;
        transition: opacity 0.15s;
    }
`

const NavbarHeader = () => {
    return(
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{"background-color":"#e06666ff", "color":"#FFF"}}>
            <Navbar.Brand href="/">
                <StyledIcon
                    src={icon}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/hot">Hot Deals</Nav.Link>
                    <Nav.Link href="/upcoming-releases">Releaes</Nav.Link>
                    <NavDropdown title="Brands" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/adidas">Adidas</NavDropdown.Item>
                        <NavDropdown.Item href="/nike">Nike</NavDropdown.Item>
                        <NavDropdown.Item href="/reebok">Reebok</NavDropdown.Item>
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