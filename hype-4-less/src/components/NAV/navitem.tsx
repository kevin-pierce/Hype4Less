import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink).attrs({
    onClick: (event) => {
        //event.preventDefault();
    }
})`
    color: #000000

    :hover{
        opacity: 0.6;
        transition: opacity 0.3s;
    }
`


const NavItem:React.FC<{pagePath: string}> = ({pagePath}) => {

    return (
        <StyledNavLink to={`/${pagePath}`}>
            Home
        </StyledNavLink>
    ) 
}

export default NavItem;