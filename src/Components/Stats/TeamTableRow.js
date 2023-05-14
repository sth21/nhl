import { TableRow } from "@mui/material";
import { StyledPageTableCell } from "../../StyledComponents/General/GeneralComponents";

// team.team.name.replace(/\s*\([^)]*\)/g, "")

export default function TeamTableRow({ team }) {
  return (
    <TableRow>
      <StyledPageTableCell>Rank</StyledPageTableCell>
      <StyledPageTableCell>Team</StyledPageTableCell>
      <StyledPageTableCell>Season</StyledPageTableCell>
      <StyledPageTableCell>GP</StyledPageTableCell>
      <StyledPageTableCell>W</StyledPageTableCell>
      <StyledPageTableCell>L</StyledPageTableCell>
      <StyledPageTableCell>T</StyledPageTableCell>
      <StyledPageTableCell>P</StyledPageTableCell>
      <StyledPageTableCell>P%</StyledPageTableCell>
      <StyledPageTableCell>RW</StyledPageTableCell>
      <StyledPageTableCell>ROW</StyledPageTableCell>
      <StyledPageTableCell>S/O</StyledPageTableCell>
      <StyledPageTableCell>GF</StyledPageTableCell>
      <StyledPageTableCell>GA</StyledPageTableCell>
      <StyledPageTableCell>GF/GP</StyledPageTableCell>
      <StyledPageTableCell>GA/GP</StyledPageTableCell>
      <StyledPageTableCell>PP%</StyledPageTableCell>
      <StyledPageTableCell>PK%</StyledPageTableCell>
      <StyledPageTableCell>Shots/GP</StyledPageTableCell>
      <StyledPageTableCell>SA/GP</StyledPageTableCell>
      <StyledPageTableCell>FOW%</StyledPageTableCell>
    </TableRow>
  );
}
