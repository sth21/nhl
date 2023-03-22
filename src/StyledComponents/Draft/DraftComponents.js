import { Table, TableRow } from "@mui/material";
import styled from "styled-components";
import {
  StyledFlexCell,
  StyledTableCell,
  StyledTableHeader,
  StyledOption,
} from "../General/GeneralComponents";
import { StyledHeader } from "../Home/WidgetComponents";

const StyledDraftWrapper = styled.div`
  padding: 3em;
  display: flex;
  justify-content: center;

  & > div {
    background: var(--white);
    padding: 3em 6em;
    box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
  }
`;

const StyledDraftSimWrapper = styled.div`
  padding: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDraftTable = styled(Table)`
  min-width: 800px;
`;

const StyledDraftTableCell = styled(StyledTableCell)`
  && {
    text-align: left;
    padding: 1em;
    font-size: 1rem;
  }
`;

const StyledDraftHeader = styled(StyledHeader)`
  font-size: 2.5rem;
  text-align: center;
`;

const StyledDraftTableHeader = styled(StyledTableHeader)`
  && {
    text-align: left;
  }
`;

const StyledDraftRowBreak = styled(TableRow)`
  && {
    background-color: var(--grey);
    grid-column: 1 / -1;
    font-size: 1.1rem;

    & td {
      padding: 1.25em 0em;
      text-align: center;
      font-weight: bold;
    }
  }
`;

const StyledMovementWrapper = styled(StyledFlexCell)`
  && {
    gap: 0.25em;
  }
`;

const StyledMovementIcon = styled.img`
  height: 0.75rem;
  width: 0.75rem;
`;

const StyledMovementLabel = styled.p`
  font-size: 0.75rem;
  color: ${(props) =>
    !props.movement ? "#2E9FD3" : props.movement > 0 ? "#59BD5E" : "#C85959"};
`;

const StyledDraftOption = styled(StyledOption)`
  font-size: 1.25rem;
  &:hover {
    transform scale(1.03);
  }
  &:active {
    transform scale(.98)
  }
`;

export {
  StyledDraftWrapper,
  StyledDraftSimWrapper,
  StyledDraftTable,
  StyledDraftTableCell,
  StyledDraftTableHeader,
  StyledDraftHeader,
  StyledDraftRowBreak,
  StyledMovementWrapper,
  StyledMovementIcon,
  StyledMovementLabel,
  StyledDraftOption,
};
