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

import { useState } from "react";

export default function StandingsTable(props) {
  const standingsType = props.data.records[0].standingsType;
  const wildCardIndexOrder = [2, 3, 0, 4, 5, 1]; // the order to be used when displaying wild card standings

  function createTable(teams, tableName) {
    return (
      <StyledTableContainer key={uniqid()}>
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
                      {team.team.name}
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

  return standingsType === "wildCard" ? (
    <>
      <StyledStandingsHeader>Eastern Conference</StyledStandingsHeader>
      {wildCardIndexOrder
        .slice(0, 4)
        .map((val) =>
          createTable(props.data.records[val].teamRecords, getTableName(val))
        )}
      <StyledStandingsHeader>Western Conference</StyledStandingsHeader>
      {wildCardIndexOrder
        .slice(3)
        .map((val) =>
          createTable(props.data.records[val].teamRecords, getTableName(val))
        )}
    </>
  ) : standingsType === "byDivision" ? (
    <>
      <StyledStandingsHeader>Eastern Conference</StyledStandingsHeader>
      {props.data.records
        .slice(0, 2)
        .map((dataset, index) =>
          createTable(dataset.teamRecords, getTableName(index))
        )}
      <StyledStandingsHeader>Western Conference</StyledStandingsHeader>
      {props.data.records
        .slice(2, 4)
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
