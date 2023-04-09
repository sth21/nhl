import {
  StyledTableContainer,
  StyledPageTable,
  StyledTableHeader,
  StyledPageTableCell,
  StyledFlexCell,
  StyledPageTableHead,
  StyledStandingsHeader,
  StyledPageTeamCell,
} from "./../../StyledComponents/General/GeneralComponents";
import { TableHead, TableBody, TableRow } from "@mui/material";
import uniqid from "uniqid";

export default function StandingsTable(props) {
  const standingsType = props.data.records[0].standingsType;
  const wildCardIndexOrder = [2, 3, 0, 4, 5, 1]; // the order to be used when displaying wild card standings

  function handleSort(stat) {
    let option = "D";
    if (
      props.standingsOptions.sortInfo &&
      props.standingsOptions.sortInfo.stat === stat
    ) {
      option = props.standingsOptions.sortInfo.option === "A" ? "D" : "A";
    }
    props.setStandingsOptions((prev) => ({
      ...prev,
      sortInfo: { option: option, stat: stat },
    }));
  }

  function createTable(teams, tableName) {
    return (
      <StyledTableContainer key={uniqid()}>
        <StyledPageTable>
          <TableHead>
            <StyledPageTableHead>
              <StyledTableHeader>{tableName}</StyledTableHeader>
              <StyledTableHeader onClick={() => handleSort("gamesPlayed")}>
                GP
              </StyledTableHeader>
              <StyledTableHeader
                onClick={() => handleSort("leagueRecord.wins")}
              >
                W
              </StyledTableHeader>
              <StyledTableHeader
                onClick={() => handleSort("leagueRecord.losses")}
              >
                L
              </StyledTableHeader>
              <StyledTableHeader onClick={() => handleSort("leagueRecord.ot")}>
                OT
              </StyledTableHeader>
              <StyledTableHeader onClick={() => handleSort("points")}>
                PTS
              </StyledTableHeader>
              <StyledTableHeader onClick={() => handleSort("pointsPercentage")}>
                P%
              </StyledTableHeader>
              <StyledTableHeader onClick={() => handleSort("regulationWins")}>
                RW
              </StyledTableHeader>
              <StyledTableHeader onClick={() => handleSort("row")}>
                ROW
              </StyledTableHeader>
              <StyledTableHeader onClick={() => handleSort("goalsScored")}>
                GF
              </StyledTableHeader>
              <StyledTableHeader onClick={() => handleSort("goalsAgainst")}>
                GA
              </StyledTableHeader>
              <StyledTableHeader>DIFF</StyledTableHeader>
              <StyledTableHeader>STRK</StyledTableHeader>
            </StyledPageTableHead>
          </TableHead>
          <TableBody>
            {teams.map((team, index) => (
              <TableRow key={uniqid()}>
                <StyledPageTeamCell>
                  <StyledFlexCell>
                    <p style={{ minWidth: "30px", fontWeight: "bold" }}>
                      {index + 1}
                    </p>
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
                      {team.team.name.replace(/\s*\([^)]*\)/g, "")}
                    </p>
                  </StyledFlexCell>
                </StyledPageTeamCell>
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
      return info.division.name + " Division";
    } else if (info.standingsType === "byConference") {
      return info.conference.name + " Conference";
    } else {
      return "National Hockey League";
    }
  }

  function createDivisionTable() {
    return (
      <>
        <StyledStandingsHeader>
          {props.data.records[0].conference
            ? props.data.records[0].conference.name
            : ""}
        </StyledStandingsHeader>
        {props.data.records
          .slice(0, 2)
          .map((dataset, index) =>
            createTable(dataset.teamRecords, getTableName(index))
          )}
        <StyledStandingsHeader>
          {props.data.records[props.data.records.length - 1].conference
            ? props.data.records[props.data.records.length - 1].conference.name
            : ""}
        </StyledStandingsHeader>
        {props.data.records
          .slice(2, 4)
          .map((dataset, index) =>
            createTable(dataset.teamRecords, getTableName(index))
          )}
      </>
    );
  }

  function createWildcardTable() {
    return (
      <>
        <StyledStandingsHeader>
          {props.data.records[0].conference
            ? props.data.records[0].conference.name
            : ""}
        </StyledStandingsHeader>
        {wildCardIndexOrder
          .slice(0, 3)
          .map((val) =>
            createTable(props.data.records[val].teamRecords, getTableName(val))
          )}
        <StyledStandingsHeader>
          {props.data.records[props.data.records.length - 1].conference
            ? props.data.records[props.data.records.length - 1].conference.name
            : ""}
        </StyledStandingsHeader>
        {wildCardIndexOrder
          .slice(3)
          .map((val) =>
            createTable(props.data.records[val].teamRecords, getTableName(val))
          )}
      </>
    );
  }

  return standingsType === "wildCard"
    ? createWildcardTable()
    : standingsType === "byDivision"
    ? createDivisionTable()
    : props.data.records.map((dataset, index) =>
        createTable(dataset.teamRecords, getTableName(index))
      );
}
