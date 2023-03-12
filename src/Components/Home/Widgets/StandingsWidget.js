import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import {
  StyledHeader,
  StyledTableCell,
  StyledTableHeader,
  StyledTableContainer,
} from "../../../StyledComponents/Home/WidgetComponents";
import {
  StyledOptionContainer,
  StyledOption,
} from "../../../StyledComponents/General/GeneralComponents";

import { useState } from "react";
import uniqid from "uniqid";

export default function StandingsWidget(props) {
  const [activeDivision, setActiveDivision] = useState(
    props.standings.records[1]
  );

  return (
    <div>
      <StyledHeader>Standings</StyledHeader>
      <StyledOptionContainer>
        <StyledOption
          bold={activeDivision.division.abbreviation === "A"}
          onClick={() => setActiveDivision(props.standings.records[1])}
        >
          Atlantic
        </StyledOption>
        <StyledOption
          bold={activeDivision.division.abbreviation === "M"}
          onClick={() => setActiveDivision(props.standings.records[0])}
        >
          Metropolitan
        </StyledOption>
        <StyledOption
          bold={activeDivision.division.abbreviation === "P"}
          onClick={() => setActiveDivision(props.standings.records[3])}
        >
          Pacific
        </StyledOption>
        <StyledOption
          bold={activeDivision.division.abbreviation === "C"}
          onClick={() => setActiveDivision(props.standings.records[2])}
        >
          Central
        </StyledOption>
      </StyledOptionContainer>
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableHeader>T</StyledTableHeader>
              <StyledTableHeader>GP</StyledTableHeader>
              <StyledTableHeader>W</StyledTableHeader>
              <StyledTableHeader>L</StyledTableHeader>
              <StyledTableHeader>OT</StyledTableHeader>
              <StyledTableHeader>P</StyledTableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {activeDivision.teamRecords.map((team) => (
              <TableRow key={uniqid()}>
                <StyledTableCell>
                  <img
                    src={props.logos ? props.logos[team.team.id] : "#"}
                    alt={"Team logo"}
                  ></img>
                </StyledTableCell>
                <StyledTableCell>{team.gamesPlayed}</StyledTableCell>
                <StyledTableCell>{team.leagueRecord.wins}</StyledTableCell>
                <StyledTableCell>{team.leagueRecord.losses}</StyledTableCell>
                <StyledTableCell>{team.leagueRecord.ot}</StyledTableCell>
                <StyledTableCell>{team.points}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </div>
  );
}
