import { TableRow } from "@mui/material";
import { StyledPageTableCell } from "../../StyledComponents/General/GeneralComponents";

// team.team.name.replace(/\s*\([^)]*\)/g, "")

export default function SkaterTableRow({ skater, year }) {
  const stats = skater.stats;

  return (
    <TableRow>
      <StyledPageTableCell>
        {skater.rank !== undefined ? skater.rank : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {skater.fullName !== undefined ? skater.fullName : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>{`${year}-${year + 1}`}</StyledPageTableCell>
      <StyledPageTableCell>
        {skater.team !== undefined ? skater.team : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.games !== undefined ? stats.games : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.goals !== undefined ? stats.goals : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.assists !== undefined ? stats.assists : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.points !== undefined ? stats.assists : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.plusMinus !== undefined ? stats.plusMinus : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.pim !== undefined ? stats.pim : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.powerPlayGoals !== undefined ? stats.powerPlayGoals : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.powerPlayPoints !== undefined ? stats.powerPlayPoints : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.shortHandedGoals !== undefined ? stats.shortHandedGoals : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.shortHandedPoints !== undefined
          ? stats.shortHandedPoints
          : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.overTimeGoals !== undefined ? stats.overTimeGoals : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.gameWinningGoals !== undefined ? stats.gameWinningGoals : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.shots !== undefined ? stats.shots : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.shotPct !== undefined ? stats.shotPct : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.timeOnIcePerGame !== undefined ? stats.timeOnIcePerGame : "N/A"}
      </StyledPageTableCell>
      <StyledPageTableCell>
        {stats.faceOffPct !== undefined ? stats.faceOffPct : "N/A"}
      </StyledPageTableCell>
    </TableRow>
  );
}
