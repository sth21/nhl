import { TableRow } from "@mui/material";
import styled from "styled-components";
import { StyledFlexCell } from "../General/GeneralComponents";

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

export {
  StyledDraftRowBreak,
  StyledMovementWrapper,
  StyledMovementIcon,
  StyledMovementLabel,
};
