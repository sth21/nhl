import { StyledHeadlineWrapper } from "../General/GeneralComponents";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledWidgetContainer = styled.div`
  display: grid;
  padding: 3em;
  grid-template: auto / repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-flow: row;
  gap: 3em;

  & > div {
    background: var(--white);
    padding: 2em;
    box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
  }

  & img {
    height: 2.5em;
    width: 2.5em;
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

const StyledSMWrapper = styled(StyledHeadlineWrapper)`
  gap: 1.8em;
`;

const StyledSMLink = styled(StyledLink)`
  display: flex;
  gap: 1em;
  font-weight: bold;
  align-items: center;
`;

export { StyledWidgetContainer, StyledLink, StyledSMWrapper, StyledSMLink };
