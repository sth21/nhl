import { TableRow } from "@mui/material";
import { StyledPageTableCell } from "../../StyledComponents/General/GeneralComponents";

// team.team.name.replace(/\s*\([^)]*\)/g, "")

export default function SkaterTableRow({ skater, year }) {
  const stats = skater.stats;

  return (
    <TableRow>
      <StyledPageTableCell>{skater.rank}</StyledPageTableCell>
      <StyledPageTableCell>{skater.fullName}</StyledPageTableCell>
      <StyledPageTableCell>{`${year.slice(0, 4)}-${year.slice(
        4
      )}`}</StyledPageTableCell>
      <StyledPageTableCell>{skater.team}</StyledPageTableCell>
      <StyledPageTableCell>{stats.games}</StyledPageTableCell>
      <StyledPageTableCell>{stats.goals}</StyledPageTableCell>
      <StyledPageTableCell>{stats.assists}</StyledPageTableCell>
      <StyledPageTableCell>{stats.points}</StyledPageTableCell>
      <StyledPageTableCell>{stats.plusMinus}</StyledPageTableCell>
      <StyledPageTableCell>{stats.pim}</StyledPageTableCell>
      <StyledPageTableCell>{stats.powerPlayGoals}</StyledPageTableCell>
      <StyledPageTableCell>{stats.powerPlayPoints}</StyledPageTableCell>
      <StyledPageTableCell>{stats.shortHandedGoals}</StyledPageTableCell>
      <StyledPageTableCell>{stats.shortHandedPoints}</StyledPageTableCell>
      <StyledPageTableCell>{stats.overTimeGoals}</StyledPageTableCell>
      <StyledPageTableCell>{stats.gameWinningGoals}</StyledPageTableCell>
      <StyledPageTableCell>{stats.shots}</StyledPageTableCell>
      <StyledPageTableCell>{stats.shotPct}</StyledPageTableCell>
      <StyledPageTableCell>{stats.timeOnIcePerGame}</StyledPageTableCell>
      <StyledPageTableCell>{stats.faceOffPct}</StyledPageTableCell>
    </TableRow>
  );
}
