import {
  StyledTableContainer,
  StyledPageTable,
  StyledPageTableHeader,
  StyledPageTableCell,
  StyledFlexCell,
} from "./../../StyledComponents/General/GeneralComponents";
import { TableHead, TableBody, TableRow } from "@mui/material";

export default function StandingsTable(props) {
  return (
    <StyledTableContainer>
      <StyledPageTable>
        <TableHead>
          <TableRow>
            <StyledPageTableHeader>{props.tableName}</StyledPageTableHeader>
            <StyledPageTableHeader>GP</StyledPageTableHeader>
            <StyledPageTableHeader>W</StyledPageTableHeader>
            <StyledPageTableHeader>L</StyledPageTableHeader>
            <StyledPageTableHeader>OT</StyledPageTableHeader>
            <StyledPageTableHeader>PTS</StyledPageTableHeader>
            <StyledPageTableHeader>P%</StyledPageTableHeader>
            <StyledPageTableHeader>RW</StyledPageTableHeader>
            <StyledPageTableHeader>ROW</StyledPageTableHeader>
            <StyledPageTableHeader>GF</StyledPageTableHeader>
            <StyledPageTableHeader>GA</StyledPageTableHeader>
            <StyledPageTableHeader>DIFF</StyledPageTableHeader>
            <StyledPageTableHeader>STRK</StyledPageTableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.teams.map((team, index) => (
            <TableRow>
              <StyledFlexCell>
                <p>{index + 1}</p>
                <img
                  src={
                    props.logos ? props.logos[parseInt(team.team.id, 10)] : "#"
                  }
                  alt="team logo"
                ></img>
                <p>
                  {team.clinchIndicator ? team.clinchIndicator + "-" : ""}
                  {team.team.name}
                </p>
              </StyledFlexCell>
              <StyledPageTableCell>{team.gamesPlayed}</StyledPageTableCell>
              <StyledPageTableCell>
                {team.leagueRecord.wins}
              </StyledPageTableCell>
              <StyledPageTableCell>
                {team.leagueRecord.losses}
              </StyledPageTableCell>
              <StyledPageTableCell>{team.leagueRecord.ot}</StyledPageTableCell>
              <StyledPageTableCell>{team.points}</StyledPageTableCell>
              <StyledPageTableCell>
                {(team.pointsPercentage * 100).toFixed(2) + "%"}
              </StyledPageTableCell>
              <StyledPageTableCell>{team.regulationWins}</StyledPageTableCell>
              <StyledPageTableCell>{team.row}</StyledPageTableCell>
              <StyledPageTableCell>{team.goalsScored}</StyledPageTableCell>
              <StyledPageTableCell>{team.goalsAgainst}</StyledPageTableCell>
              <StyledPageTableCell>
                {team.goalsScored - team.goalsAgainst}
              </StyledPageTableCell>
              <StyledPageTableCell>
                {team.streak.streakCode}
              </StyledPageTableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledPageTable>
    </StyledTableContainer>
  );
}
