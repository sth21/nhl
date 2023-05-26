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
      <StyledPageTableCell>{`${year}-${year + 1}`}</StyledPageTableCell>
      <StyledPageTableCell>
        {teamStats.gamesPlayed !== undefined ? teamStats.gamesPlayed : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {teamStats.wins !== undefined ? teamStats.wins : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {teamStats.losses !== undefined ? teamStats.losses : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {teamStats.pts !== undefined ? teamStats.pts : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {teamStats.ptPctg !== undefined ? teamStats.ptPctg : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {teamStats.goalsPerGame !== undefined ? teamStats.goalsPerGame : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {teamStats.goalsAgainstPerGame !== undefined
          ? teamStats.goalsAgainstPerGame
          : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>{teamStats.powerPlayPercentage}</StyledPageTableCell>
      <StyledPageTableCell>
        {teamStats.penaltyKillPercentage !== undefined
          ? teamStats.penaltyKillPercentage
          : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {teamStats.shotsPerGame !== undefined ? teamStats.shotsPerGame : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {teamStats.shotsAllowed !== undefined ? teamStats.shotsAllowed : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {teamStats.shootingPctg !== undefined ? teamStats.shootingPctg : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {teamStats.faceOffWinPercentage !== undefined
          ? teamStats.faceOffWinPercentage
          : "N/A"}
      </StyledPageTableCell>
    </TableRow>
  );
}
