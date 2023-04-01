import { Table, TableRow } from "@mui/material";
import styled from "styled-components";
import {
  StyledFlexCell,
  StyledTableCell,
  StyledTableHeader,
  StyledOption,
} from "../General/GeneralComponents";

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
  StyledDraftTable,
  StyledDraftTableCell,
  StyledDraftTableHeader,
  StyledDraftRowBreak,
  StyledMovementWrapper,
  StyledMovementIcon,
  StyledMovementLabel,
  StyledDraftOption,
};
