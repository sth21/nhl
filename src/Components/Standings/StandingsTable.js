import {
  StyledTableContainer,
  StyledPageTable,
  StyledTableHeader,
  StyledPageTableCell,
  StyledFlexCell,
  StyledPageTableHead,
} from "./../../StyledComponents/General/GeneralComponents";
import { TableHead, TableBody, TableRow } from "@mui/material";
import uniqid from "uniqid";

export default function StandingsTable(props) {
  const standingsType = props.data.records[0].standingsType;
  const wildCardIndexOrder = [2, 3, 0, 4, 5, 1]; // the order to be used when displaying wild card standings

  function createTable(teams, tableName) {
    return (
      <StyledTableContainer>
        <StyledPageTable>
          <TableHead>
            <StyledPageTableHead>
              <StyledTableHeader>{tableName}</StyledTableHeader>
              <StyledTableHeader>GP</StyledTableHeader>
              <StyledTableHeader>W</StyledTableHeader>
              <StyledTableHeader>L</StyledTableHeader>
              <StyledTableHeader>OT</StyledTableHeader>
              <StyledTableHeader>PTS</StyledTableHeader>
              <StyledTableHeader>P%</StyledTableHeader>
              <StyledTableHeader>RW</StyledTableHeader>
              <StyledTableHeader>ROW</StyledTableHeader>
              <StyledTableHeader>GF</StyledTableHeader>
              <StyledTableHeader>GA</StyledTableHeader>
              <StyledTableHeader>DIFF</StyledTableHeader>
              <StyledTableHeader>STRK</StyledTableHeader>
            </StyledPageTableHead>
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

  function getTableName(recordsIndex) {
    const info = props.data.records[recordsIndex];
    if (info.standingsType === "wildCard") {
      return "Wild Card";
    } else if (
      info.standingsType === "byDivision" ||
      info.standingsType === "divisionLeaders"
    ) {
      return info.division.name;
    } else if (info.standingsType === "byConference") {
      return info.conference.name;
    } else {
      return "National Hockey League";
    }
  }

  return standingsType === "wildCard" ? (
    <>
      <p>Eastern</p>
      {wildCardIndexOrder
        .slice(0, 4)
        .map((val) =>
          createTable(props.data.records[val].teamRecords, getTableName(val))
        )}
      <p>Western</p>
      {wildCardIndexOrder
        .slice(3)
        .map((val) =>
          createTable(props.data.records[val].teamRecords, getTableName(val))
        )}
    </>
  ) : standingsType === "byDivision" ? (
    <>
      <p>Eastern</p>
      {props.data.records
        .slice(0, 3)
        .map((dataset, index) =>
          createTable(dataset.teamRecords, getTableName(index))
        )}
      <p>Western</p>
      {props.data.records
        .slice(3)
        .map((dataset, index) =>
          createTable(dataset.teamRecords, getTableName(index))
        )}
    </>
  ) : (
    props.data.records.map((dataset, index) =>
      createTable(dataset.teamRecords, getTableName(index))
    )
  );
}
