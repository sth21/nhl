import { TableRow } from "@mui/material";
import { StyledPageTableCell } from "../../StyledComponents/General/GeneralComponents";

// team.team.name.replace(/\s*\([^)]*\)/g, "")

export default function SkaterTableRow({ goalie, year }) {
  const stats = goalie.stats;

  return (
    <TableRow>
      <StyledPageTableCell>{goalie.rank}</StyledPageTableCell>
      <StyledPageTableCell>{goalie.fullName}</StyledPageTableCell>
      <StyledPageTableCell>{`${year.slice(0, 4)}-${year.slice(
        4
      )}`}</StyledPageTableCell>
      <StyledPageTableCell>{goalie.team}</StyledPageTableCell>
      <StyledPageTableCell>{stats.games}</StyledPageTableCell>
      <StyledPageTableCell>{stats.gamesStarted}</StyledPageTableCell>
      <StyledPageTableCell>{stats.wins}</StyledPageTableCell>
      <StyledPageTableCell>{stats.losses}</StyledPageTableCell>
      <StyledPageTableCell>{stats.shotsAgainst}</StyledPageTableCell>
      <StyledPageTableCell>{stats.saves}</StyledPageTableCell>
      <StyledPageTableCell>{stats.goalsAgainst}</StyledPageTableCell>
      <StyledPageTableCell>
        {stats.savePercentage.toFixed(3)}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.goalAgainstAverage.toFixed(2)}
      </StyledPageTableCell>
      <StyledPageTableCell>{stats.timeOnIce}</StyledPageTableCell>
      <StyledPageTableCell>{stats.shutouts}</StyledPageTableCell>
    </TableRow>
  );
}
