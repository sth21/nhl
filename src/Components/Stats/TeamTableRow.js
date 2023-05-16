import { TableRow } from "@mui/material";
import { StyledPageTableCell } from "../../StyledComponents/General/GeneralComponents";

// team.team.name.replace(/\s*\([^)]*\)/g, "")

export default function TeamTableRow({ team, index, year }) {
  const teamInfo = team.teamStats[0].splits[0];
  const teamStats = teamInfo.stat;

  return (
    <TableRow>
      <StyledPageTableCell>{index}</StyledPageTableCell>
      <StyledPageTableCell>{teamInfo.team.name}</StyledPageTableCell>
      <StyledPageTableCell>
        {year.slice(0, 4) + "-" + year.slice(4)}
      </StyledPageTableCell>
      <StyledPageTableCell>{teamStats.gamesPlayed}</StyledPageTableCell>
      <StyledPageTableCell>{teamStats.wins}</StyledPageTableCell>
      <StyledPageTableCell>{teamStats.losses}</StyledPageTableCell>
      <StyledPageTableCell>{teamStats.pts}</StyledPageTableCell>
      <StyledPageTableCell>{teamStats.ptPctg}</StyledPageTableCell>
      <StyledPageTableCell>{teamStats.goalsPerGame}</StyledPageTableCell>
      <StyledPageTableCell>{teamStats.goalsAgainstPerGame}</StyledPageTableCell>
      <StyledPageTableCell>{teamStats.powerPlayPercentage}</StyledPageTableCell>
      <StyledPageTableCell>
        {teamStats.penaltyKillPercentage}
      </StyledPageTableCell>
      <StyledPageTableCell>{teamStats.shotsPerGame}</StyledPageTableCell>
      <StyledPageTableCell>{teamStats.shotsAllowed}</StyledPageTableCell>
      <StyledPageTableCell>{teamStats.shootingPctg}</StyledPageTableCell>
      <StyledPageTableCell>
        {teamStats.faceOffWinPercentage}
      </StyledPageTableCell>
    </TableRow>
  );
}
