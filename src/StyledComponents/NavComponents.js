import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
    display: flex;
    color: var(--white);
    font-weight: bold;
    padding: 1em 3em;
    background: var(--black);
    gap: 3em;
    min-height: 60px;
    align-items: center;
    width: 100%;
`;

const StyledLogo = styled.img`
    height: 4.5em;
    width: 4.5em;
`;

const StyledIcon = styled(StyledLogo)`
    height: 1.5em;
    width: 1.5em;
`;

const StyledNavWrapper = styled.div`
    display: flex;
    gap: 3em;
    align-items: center;
    margin-right: ${ props => props.pushRight ? "auto" : 0 };
`;

const StyledLink = styled(Link)`
    color: inherit;
    font-weight: inherit;
    text-decoration: none;
  
    &:hover {
      text-decoration: none;
    }
  
    &:visited {
      text-decoration: none;
    }
  
    &:active {
      text-decoration: none;
    }
`;

const StyledLoginContainer = styled(StyledNavWrapper)`
    gap: 1em;
    margin-right: 0;
`;

export { StyledNav, StyledLogo, StyledIcon, StyledNavWrapper, StyledLink, StyledLoginContainer };