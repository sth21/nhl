// props.homeTeamStats
// props.awayTeamStats
// props.homeTeamName
// props.awayTeamName

import { StyledScoreboardWrapper } from "../../../../StyledComponents/Scores/ScoresComponents";
import {
  StyledTableContainer,
  StyledTableHeader,
  StyledTableCell,
} from "../../../../StyledComponents/General/GeneralComponents";
import { Table, TableHead, TableBody, TableRow } from "@mui/material";

export default function TeamsStatsWidget(props) {
  function StatRow({ statName, statAccessor }) {
    return (
      <TableRow>
        <StyledTableCell>{statName}</StyledTableCell>
        <StyledTableCell>{props.homeTeamStats[statAccessor]}</StyledTableCell>
        <StyledTableCell>{props.awayTeamStats[statAccessor]}</StyledTableCell>
      </TableRow>
    );
  }

  return (
    <StyledScoreboardWrapper>
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableHeader>Category</StyledTableHeader>
              <StyledTableHeader>{props.homeTeamName}</StyledTableHeader>
              <StyledTableHeader>{props.awayTeamName}</StyledTableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <StatRow statName="PPG" statAccessor="powerPlayGoals" />
            <StatRow statName="PP%" statAccessor="powerPlayPercentage" />
            <StatRow statName="PIM" statAccessor="pim" />
            <StatRow statName="FO%" statAccessor="faceOffWinPercentage" />
            <StatRow statName="Blocks" statAccessor="blocked" />
            <StatRow statName="Takeaways" statAccessor="takeaways" />
            <StatRow statName="Giveaways" statAccessor="giveaways" />
            <StatRow statName="Hits" statAccessor="hits" />
          </TableBody>
        </Table>
      </StyledTableContainer>
    </StyledScoreboardWrapper>
  );
}
