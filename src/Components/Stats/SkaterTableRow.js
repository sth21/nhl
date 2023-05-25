import { TableRow } from "@mui/material";
import { StyledPageTableCell } from "../../StyledComponents/General/GeneralComponents";

// team.team.name.replace(/\s*\([^)]*\)/g, "")

export default function SkaterTableRow({ skater, year }) {
  const stats = skater.stats;

  return (
    <TableRow>
      <StyledPageTableCell>
        {skater.rank ? skater.rank : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {skater.fullName ? skater.fullName : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>{`${year}-${year + 1}`}</StyledPageTableCell>
      <StyledPageTableCell>
        {skater.team ? skater.team : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {skater.games ? stats.games : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.goals ? stats.goals : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {skater.assists ? stats.assists : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.points ? stats.assists : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.plusMinus ? stats.plusMinus : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>{stats.pim ? stats.pim : "N/A"}</StyledPageTableCell>
      <StyledPageTableCell>
        {stats.powerPlayGoals ? stats.powerPlayGoals : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.powerPlayPoints ? stats.powerPlayPoints : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.shortHandedGoals !== undefined ? stats.shortHandedGoals : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.shortHandedPoints ? stats.shortHandedPoints : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.overTimeGoals ? stats.overTimeGoals : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.gameWinningGoals ? stats.gameWinningGoals : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.shots ? stats.shots : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.shotPct ? stats.shotPct : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.timeOnIcePerGame ? stats.timeOnIcePerGame : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.faceOffPct ? stats.faceOffPct : "N/A"}
      </StyledPageTableCell>
    </TableRow>
  );
}
