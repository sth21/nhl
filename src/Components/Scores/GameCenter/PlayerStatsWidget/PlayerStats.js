// props.teamPlayers
// props.teamName

import { StyledScoreboardWrapper } from "../../../../StyledComponents/Scores/ScoresComponents";
import {
  StyledTableContainer,
  StyledTableHeader,
  StyledTableCell,
  StyledHeader,
} from "../../../../StyledComponents/General/GeneralComponents";
import { Table, TableHead, TableBody, TableRow } from "@mui/material";
import uniqid from "uniqid";

export default function PlayerStats(props) {
  function SkaterRow({ player }) {
    return (
      <TableRow key={uniqid()}>
        <StyledTableCell>{player.jerseyNumber}</StyledTableCell>
        <StyledTableCell>{player.person.fullName}</StyledTableCell>
        <StyledTableCell>{player.stats.skaterStats.goals}</StyledTableCell>
        <StyledTableCell>{player.stats.skaterStats.assists}</StyledTableCell>
        <StyledTableCell>{player.stats.skaterStats.plusMinus}</StyledTableCell>
        <StyledTableCell>{player.stats.skaterStats.shots}</StyledTableCell>
        <StyledTableCell>
          {player.stats.skaterStats.penaltyMinutes}
        </StyledTableCell>
        <StyledTableCell>{player.stats.skaterStats.timeOnIce}</StyledTableCell>
      </TableRow>
    );
  }

  function GoalieRow({ goalie }) {
    return (
      <TableRow key={uniqid()}>
        <StyledTableCell>{goalie.jerseyNumber}</StyledTableCell>
        <StyledTableCell>{goalie.person.fullName}</StyledTableCell>
        <StyledTableCell>{goalie.stats.goalieStats.saves}</StyledTableCell>
        <StyledTableCell>{goalie.stats.goalieStats.shots}</StyledTableCell>
        <StyledTableCell>
          {Math.trunc(goalie.stats.goalieStats.savePercentage * 10) / 1000}
        </StyledTableCell>
        <StyledTableCell>{goalie.stats.goalieStats.timeOnIce}</StyledTableCell>
      </TableRow>
    );
  }

  const skaters = Object.keys(props.teamPlayers)
    .map((key) => props.teamPlayers[key])
    .filter(
      (player) =>
        player.position.code !== "G" && Object.keys(player.stats).length > 0
    );
  const goalies = Object.keys(props.teamPlayers)
    .map((key) => props.teamPlayers[key])
    .filter(
      (player) =>
        player.position.code === "G" && Object.keys(player.stats).length > 0
    )
    .sort((b, a) => b.stats.goalieStats.shots - a.stats.goalieStats.shots);

  return (
    <StyledScoreboardWrapper>
      <StyledTableContainer>
        <StyledHeader style={{ textAlign: "center", paddingBottom: "2em" }}>
          {props.teamName} Player Stats
        </StyledHeader>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableHeader>#</StyledTableHeader>
              <StyledTableHeader>Player</StyledTableHeader>
              <StyledTableHeader>G</StyledTableHeader>
              <StyledTableHeader>A</StyledTableHeader>
              <StyledTableHeader>+/-</StyledTableHeader>
              <StyledTableHeader>S</StyledTableHeader>
              <StyledTableHeader>PIM</StyledTableHeader>
              <StyledTableHeader>TOI</StyledTableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {skaters.map((skater) => (
              <SkaterRow player={skater} />
            ))}
          </TableBody>
        </Table>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableHeader>#</StyledTableHeader>
              <StyledTableHeader>Goalie</StyledTableHeader>
              <StyledTableHeader>SV</StyledTableHeader>
              <StyledTableHeader>S</StyledTableHeader>
              <StyledTableHeader>SV%</StyledTableHeader>
              <StyledTableHeader>TOI</StyledTableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {goalies.map((goalie) => (
              <GoalieRow goalie={goalie} />
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </StyledScoreboardWrapper>
  );
}
