import { TableCell, TableContainer } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledWidgetContainer = styled.div`
  display: grid;
  padding: 3em;
  grid-template: auto / repeat(auto-fit, minmax(400px, 1fr));
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

const StyledHeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
  padding: 1em 0em;
  vertical-align: center;
`;

const StyledHeader = styled.h4`
  font-weight: bold;
  font-size: 1.1rem;
  width: 100%;
  padding-bottom: 1em;
  border-bottom: 1px solid var(--grey);
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

const StyledTableCell = styled(TableCell)`
  text-align: center !important;
  padding: 0.625em !important;
  font: inherit !important;
  font-size: 0.9rem !important;
  border-bottom: 1px solid var(--grey) !important;
`;

const StyledTableHeader = styled(StyledTableCell)`
  font-weight: bold !important;
  font-size: inherit;
`;

const StyledTableContainer = styled(TableContainer)`
  padding: 1em 0em;
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

export {
  StyledWidgetContainer,
  StyledHeadlineWrapper,
  StyledHeader,
  StyledLink,
  StyledTableCell,
  StyledTableHeader,
  StyledTableContainer,
  StyledSMWrapper,
  StyledSMLink,
};
