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

import uniqid from "uniqid";
import { useState } from "react";

export default function TeamStatsWidget(props) {
  const [activeStat, setActiveStat] = useState({
    statType: "goalsPerGame",
    teams: sortStat(props.teams, "goalsPerGame"),
  });

  function sortStat(teams, statType, option = "descending") {
    return option === "ascending"
      ? teams
          .sort(
            (a, b) =>
              parseFloat(a.teamStats[0].splits[0].stat[statType]) -
              parseFloat(b.teamStats[0].splits[0].stat[statType])
          )
          .slice(0, 10)
      : teams
          .sort(
            (a, b) =>
              parseFloat(b.teamStats[0].splits[0].stat[statType]) -
              parseFloat(a.teamStats[0].splits[0].stat[statType])
          )
          .slice(0, 10);
  }

  function statTypeReducer(statType) {
    if (statType === "goalsPerGame") {
      return "GF/G";
    } else if (statType === "goalsAgainstPerGame") {
      return "GA/G";
    } else if (statType === "powerPlayPercentage") {
      return "PP%";
    } else if (statType === "penaltyKillPercentage") {
      return "PK%";
    } else if (statType === "faceOffWinPercentage") {
      return "FOW%";
    } else {
      return "D";
    }
  }

  return activeStat ? (
    <div>
      <StyledHeader>Team Statistics</StyledHeader>
      <StyledOptionContainer>
        <StyledOption
          bold={activeStat.statType === "goalsPerGame"}
          onClick={() =>
            setActiveStat({
              statType: "goalsPerGame",
              teams: sortStat(props.teams, "goalsPerGame"),
            })
          }
        >
          GF/G
        </StyledOption>
        <StyledOption
          bold={activeStat.statType === "goalsAgainstPerGame"}
          onClick={() =>
            setActiveStat({
              statType: "goalsAgainstPerGame",
              teams: sortStat(props.teams, "goalsAgainstPerGame", "ascending"),
            })
          }
        >
          GA/G
        </StyledOption>
        <StyledOption
          bold={activeStat.statType === "powerPlayPercentage"}
          onClick={() =>
            setActiveStat({
              statType: "powerPlayPercentage",
              teams: sortStat(props.teams, "powerPlayPercentage"),
            })
          }
        >
          PP %
        </StyledOption>
        <StyledOption
          bold={activeStat.statType === "penaltyKillPercentage"}
          onClick={() =>
            setActiveStat({
              statType: "penaltyKillPercentage",
              teams: sortStat(props.teams, "penaltyKillPercentage"),
            })
          }
        >
          PK %
        </StyledOption>
        <StyledOption
          bold={activeStat.statType === "faceOffWinPercentage"}
          onClick={() =>
            setActiveStat({
              statType: "faceOffWinPercentage",
              teams: sortStat(props.teams, "faceOffWinPercentage"),
            })
          }
        >
          FOW %
        </StyledOption>
      </StyledOptionContainer>
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableHeader>Rank</StyledTableHeader>
              <StyledTableHeader>Team</StyledTableHeader>
              <StyledTableHeader>
                {statTypeReducer(activeStat.statType)}
              </StyledTableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {activeStat.teams.map((team, index) => (
              <TableRow key={uniqid()}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell>
                  <img
                    src={props.logos ? props.logos[parseInt(team.id, 10)] : "#"}
                    alt="Team"
                  ></img>
                </StyledTableCell>
                <StyledTableCell>
                  {team.teamStats[0].splits[0].stat[activeStat.statType]}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </div>
  ) : (
    <></>
  );
}
