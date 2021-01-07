import React from "react"
import styled from "styled-components"
import NavItem from "./navitem"

const StyledNavBar = styled.div`
    display:flex;
`

const NavBar: React.FC = () => {

    return (
        <StyledNavBar>
            <NavItem pagePath="thisIsAtestlink"/>
        </StyledNavBar>
    );
}

export default NavBar;