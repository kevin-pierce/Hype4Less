import React from "react";
import styled from "styled-components";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import icon from "../../img/invertedHype4Less_noText.svg"

const StyledIcon = styled.img`
    opacity:1;
    transition:opacity 0.15s;

    :hover{
        opacity:0.75;
        transition: opacity 0.2s;
    }
`

const StyledNavLink = styled(Nav.Link)`
    color:#FFF;
    font-weight:700;
    opacity:1;
    transition:opacity 0.15s;

    :hover{
        opacity:0.75;
        transition: opacity 0.15s;
    }
`

const StyledNavDropdown = styled(NavDropdown)`
    color:#FFF;
    font-weight:700;
`

const NavbarHeader = () => {
    return(
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{"backgroundColor":"#e06666ff", "color":"#FFF"}}>
            <Navbar.Brand href="/">
                <StyledIcon
                    src={icon}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                    alt="Hype4Less Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <StyledNavLink href="/hot" style={{"color":"#FFF"}}>Hot Deals</StyledNavLink>
                    <StyledNavLink href="/upcoming-releases" style={{"color":"#FFF"}}>Releases</StyledNavLink>
                    <StyledNavDropdown title="Brands" id="collasible-nav-dropdown" style={{"color":"#FFF"}} active={true}>
                        <NavDropdown.Item href="/adidas" >Adidas</NavDropdown.Item>
                        <NavDropdown.Item href="/nike" >Nike</NavDropdown.Item>
                        <NavDropdown.Item href="/reebok" >Reebok</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" >Separated link</NavDropdown.Item>
                    </StyledNavDropdown>
                </Nav>
                <Nav>
                    <StyledNavLink href="/about-us" style={{"color":"#FFF"}}>About</StyledNavLink>
                    <StyledNavLink eventKey={2} href="/contact" style={{"color":"#FFF"}}>
                        Contact
                    </StyledNavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarHeader;