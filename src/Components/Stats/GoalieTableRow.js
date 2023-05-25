import { TableRow } from "@mui/material";
import { StyledPageTableCell } from "../../StyledComponents/General/GeneralComponents";

// team.team.name.replace(/\s*\([^)]*\)/g, "")

export default function SkaterTableRow({ goalie, year }) {
  const stats = goalie.stats;

  return (
    <TableRow>
      <StyledPageTableCell>
        {goalie.rank ? goalie.rank : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {goalie.fullName ? goalie.fullName : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>{`${year}-${year + 1}`}</StyledPageTableCell>
      <StyledPageTableCell>
        {goalie.team ? goalie.team : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.games ? stats.games : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.gamesStarted ? stats.gamesStarted : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.wins ? stats.wins : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.losses ? stats.losses : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.shotsAgainst ? stats.shotsAgainst : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.saves ? stats.saves : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.goalsAgainst ? stats.goalsAgainst : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.savePercentage ? stats.savePercentage.toFixed(3) : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.savePercentage ? stats.goalAgainstAverage.toFixed(2) : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.timeOnIce ? stats.timeOnIce : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.shutouts ? stats.shutouts : "N/A"}
      </StyledPageTableCell>
    </TableRow>
  );
}
