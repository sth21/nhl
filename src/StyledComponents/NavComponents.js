import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  position: sticky;
  box-sizing: border-box;
  top: 0;
  z-index: 2;
  display: flex;
  color: var(--white);
  font-weight: bold;
  padding: 1em 1.5em;
  background: var(--black);
  gap: 3em;
  min-height: 60px;
  align-items: center;
  max-width: 100%;

  @media (max-width: 750px) {
    gap: 2em;
    padding: 0.67em 2em;
    font-size: 0.75rem;
  }

  @media (max-width: 550px) {
    gap: 1em;
  }
`;

const StyledLogo = styled.img`
  height: 4.5em;
  width: 4.5em;
`;

const StyledNavWrapper = styled.div`
  display: flex;
  gap: 3em;
  align-items: center;

  @media (max-width: 550px) {
    display: ${(props) => (props.removeable ? "none" : "flex")};
  }
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

export { StyledNav, StyledLogo, StyledNavWrapper, StyledLink };
