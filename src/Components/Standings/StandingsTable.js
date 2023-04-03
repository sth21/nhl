import {
  StyledTableContainer,
  StyledPageTable,
  StyledPageTableHeader,
  StyledPageTableCell,
  StyledFlexCell,
} from "./../../StyledComponents/General/GeneralComponents";
import { TableHead, TableBody, TableRow } from "@mui/material";
import uniqid from "uniqid";

export default function StandingsTable(props) {
  const standingsType = props.data.records[0].standingsType;

  function createTable(teams, tableName) {
    return (
      <StyledTableContainer>
        <StyledPageTable>
          <TableHead>
            <TableRow>
              <StyledPageTableHeader>{tableName}</StyledPageTableHeader>
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
            {teams.map((team, index) => (
              <TableRow key={uniqid()}>
                <StyledPageTableCell>
                  <StyledFlexCell>
                    <p style={{ minWidth: "30px" }}>{index + 1}</p>
                    <img
                      src={
                        props.logos
                          ? props.logos[parseInt(team.team.id, 10)]
                          : "#"
                      }
                      alt="team logo"
                    ></img>
                    <p>
                      {team.clinchIndicator ? team.clinchIndicator + "-" : ""}
                      {team.team.name}
                    </p>
                  </StyledFlexCell>
                </StyledPageTableCell>
                <StyledPageTableCell>{team.gamesPlayed}</StyledPageTableCell>
                <StyledPageTableCell>
                  {team.leagueRecord.wins}
                </StyledPageTableCell>
                <StyledPageTableCell>
                  {team.leagueRecord.losses}
                </StyledPageTableCell>
                <StyledPageTableCell>
                  {team.leagueRecord.ot}
                </StyledPageTableCell>
                <StyledPageTableCell>{team.points}</StyledPageTableCell>
                <StyledPageTableCell>
                  {(team.pointsPercentage * 100).toFixed(2) + "%"}
                </StyledPageTableCell>
                <StyledPageTableCell>
                  {team.regulationWins ? team.regulationWins : "N/A"}
                </StyledPageTableCell>
                <StyledPageTableCell>
                  {team.row ? team.row : "N/A"}
                </StyledPageTableCell>
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

  return standingsType === "byLeague" ? (
    createTable(props.data.records[0].teamRecords, "National Hockey League")
  ) : standingsType === "byConference" ? (
    [
      createTable(props.data.records[0].teamRecords, "Eastern"),
      createTable(props.data.records[1].teamRecords, "Western"),
    ]
  ) : standingsType === "byDivision" ? (
    [
      createTable(props.data.records[0].teamRecords, "Metropolitan"),
      createTable(props.data.records[1].teamRecords, "Atlantic"),
      createTable(props.data.records[2].teamRecords, "Central"),
      createTable(props.data.records[3].teamRecords, "Pacific"),
    ]
  ) : standingsType === "wildCard" ? (
    [
      createTable(props.data.records[2].teamRecords, "Metropolitan"),
      createTable(props.data.records[3].teamRecords, "Atlantic"),
      createTable(props.data.records[0].teamRecords, "Wild Card"),
      createTable(props.data.records[4].teamRecords, "Central"),
      createTable(props.data.records[5].teamRecords, "Pacific"),
      createTable(props.data.records[1].teamRecords, "Wild Card"),
    ]
  ) : (
    <></>
  );
}
