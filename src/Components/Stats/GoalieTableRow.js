import { TableRow } from "@mui/material";
import { StyledPageTableCell } from "../../StyledComponents/General/GeneralComponents";

// team.team.name.replace(/\s*\([^)]*\)/g, "")

export default function SkaterTableRow({ goalie, year }) {
  const stats = goalie.stats;

  return (
    <TableRow>
      <StyledPageTableCell>
        {goalie.rank !== undefined ? goalie.rank : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {goalie.fullName !== undefined ? goalie.fullName : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>{`${year}-${year + 1}`}</StyledPageTableCell>
      <StyledPageTableCell>
        {goalie.team !== undefined ? goalie.team : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.games !== undefined ? stats.games : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.gamesStarted !== undefined ? stats.gamesStarted : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.wins !== undefined ? stats.wins : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.losses !== undefined ? stats.losses : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.shotsAgainst !== undefined ? stats.shotsAgainst : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.saves !== undefined ? stats.saves : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.goalsAgainst !== undefined ? stats.goalsAgainst : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.savePercentage !== undefined
          ? stats.savePercentage.toFixed(3)
          : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.savePercentage !== undefined
          ? stats.goalAgainstAverage.toFixed(2)
          : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.timeOnIce !== undefined ? stats.timeOnIce : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.shutouts !== undefined ? stats.shutouts : "N/A"}
      </StyledPageTableCell>
    </TableRow>
  );
}
