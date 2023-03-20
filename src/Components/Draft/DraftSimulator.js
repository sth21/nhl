import {
  StyledDraftSimWrapper,
  StyledDraftRowBreak,
  StyledDraftHeader,
  StyledDraftTable,
  StyledDraftTableCell,
  StyledDraftTableHeader,
  StyledMovementWrapper,
  StyledMovementIcon,
  StyledMovementLabel,
} from "../../StyledComponents/Draft/DraftComponents";
import {
  StyledTableContainer,
  StyledOptionContainer,
  StyledOption,
  StyledFlexCell,
} from "./../../StyledComponents/General/GeneralComponents";
import { TableBody, TableHead, TableRow } from "@mui/material";
import downArrow from "./../../Media/down-arrow.png";
import upArrow from "./../../Media/up-arrow.png";
import { useState } from "react";
import uniqid from "uniqid";

export default function DraftSimulator(props) {
  const defaultDraftOrder = props.draftOrder;
  const [simDraftOrder, setSimDraftOrder] = useState(defaultDraftOrder);

  // Calculate a lottery winner
  function lottery() {
    let cumulativeFrequency = 0;
    const selection = Math.random();
    return defaultDraftOrder.find((team, index) => {
      cumulativeFrequency += team.odds;
      return selection < cumulativeFrequency;
    });
  }

  // Calculate each teams movement during the lottery
  function calculatePositionShift(originalOrder, newOrder) {
    return newOrder.map((newTeam, newIndex) => {
      const originalIndex = originalOrder.findIndex(
        (originalTeam) => newTeam.name === originalTeam.name
      );
      newTeam.positionShift = originalIndex - newIndex;
      return newTeam;
    });
  }

  // Calculates the position for the lottery winner to move to
  function calculateNewPosition(teams, start) {
    const newPosition = start - 10 > 0 ? start - 10 : 0;
    if (teams[newPosition].locked && start !== newPosition)
      return newPosition + 1; // Move place up 1 if team in replaced slot is locked and is not itself
    return newPosition;
  }

  // Reorganizes the team order after a lottery
  function shift(teams, start, end) {
    if (start === end || teams[start].locked) return teams; // Do not change lottery if locked team wins or there is no movement
    const winner = teams[start];
    const tempTeams = teams.slice(0, start).concat(teams.slice(start + 1));
    return teams.slice(0, end).concat(winner).concat(tempTeams.slice(end));
  }

  // Simulates the draft lottery
  function simDraftLottery(
    teams,
    firstLottery = lottery(),
    secondLottery = lottery()
  ) {
    // Create copy of original team order
    let tempTeams = JSON.parse(JSON.stringify(teams));

    // First lottery data
    const firstWinnerStart = tempTeams.findIndex(
      (team) => team.name === firstLottery.name
    );
    const firstWinnerEnd = calculateNewPosition(tempTeams, firstWinnerStart);
    const firstWinner = tempTeams[firstWinnerStart];

    // Reorganize team order after first lottery
    tempTeams = shift(tempTeams, firstWinnerStart, firstWinnerEnd);

    // Lock winner into their position
    firstWinner.locked = true;

    // Lock #1 into #1 if !T-10 wins lottery #1
    if (firstWinnerEnd !== 0) tempTeams[0].locked = true;

    // Second lottery data
    const secondWinnerStart = tempTeams.findIndex(
      (team) => team.name === secondLottery.name
    );
    const secondWinnerEnd = calculateNewPosition(tempTeams, secondWinnerStart);
    const secondWinner = tempTeams[secondWinnerStart];

    // Reorganize team order after second lottery
    tempTeams = shift(tempTeams, secondWinnerStart, secondWinnerEnd);

    // Lock winner into their position
    secondWinner.locked = true;

    // Add positionShift property to all teams in after lottery finalized
    calculatePositionShift(defaultDraftOrder, tempTeams);

    return tempTeams;
  }

  function renderLotteryTable(teams, startingIndex) {
    return teams.map((team, index) => (
      <TableRow key={uniqid()}>
        <StyledDraftTableCell style={{ minWidth: "60px" }}>
          <StyledFlexCell>
            <p>{index + startingIndex}</p>
            {team.positionShift !== 0 && team.positionShift ? (
              <StyledMovementWrapper>
                <StyledMovementIcon
                  src={team.positionShift > 0 ? upArrow : downArrow}
                />
                <StyledMovementLabel movement={team.positionShift}>
                  {team.positionShift}
                </StyledMovementLabel>
              </StyledMovementWrapper>
            ) : (
              <></>
            )}
          </StyledFlexCell>
        </StyledDraftTableCell>
        <StyledDraftTableCell>
          <StyledFlexCell>
            <img
              src={props.logos ? props.logos[parseInt(team.id, 10)] : "#"}
              alt="team logo"
            ></img>
            <p>{team.name}</p>
          </StyledFlexCell>
        </StyledDraftTableCell>
        <StyledDraftTableCell>{team.record}</StyledDraftTableCell>
        <StyledDraftTableCell>{team.points}</StyledDraftTableCell>
        <StyledDraftTableCell>{team.streak}</StyledDraftTableCell>
        <StyledDraftTableCell>
          {team.odds === 0 ? "" : (team.odds * 100).toFixed(2) + "%"}
        </StyledDraftTableCell>
      </TableRow>
    ));
  }

  return (
    <StyledDraftSimWrapper>
      <StyledDraftHeader>NHL Draft Lottery Simulator</StyledDraftHeader>
      <StyledOptionContainer>
        <StyledOption
          onClick={() => setSimDraftOrder(simDraftLottery(defaultDraftOrder))}
        >
          Simulate Lottery
        </StyledOption>
        <StyledOption onClick={() => setSimDraftOrder(defaultDraftOrder)}>
          Reset
        </StyledOption>
      </StyledOptionContainer>
      <StyledTableContainer>
        <StyledDraftTable>
          <TableHead>
            <TableRow>
              <StyledDraftTableHeader>Pick</StyledDraftTableHeader>
              <StyledDraftTableHeader>Team</StyledDraftTableHeader>
              <StyledDraftTableHeader>Record</StyledDraftTableHeader>
              <StyledDraftTableHeader>Points</StyledDraftTableHeader>
              <StyledDraftTableHeader>Streak</StyledDraftTableHeader>
              <StyledDraftTableHeader>Odds</StyledDraftTableHeader>
            </TableRow>
          </TableHead>
          {simDraftOrder ? (
            <TableBody>
              {renderLotteryTable(simDraftOrder.slice(0, 16), 1)}
              <StyledDraftRowBreak>
                <td colSpan={6}>End of Lottery</td>
              </StyledDraftRowBreak>
              {renderLotteryTable(simDraftOrder.slice(16, 28), 17)}
              <StyledDraftRowBreak>
                <td colSpan={6}>Conference Final Losers</td>
              </StyledDraftRowBreak>
              {renderLotteryTable(simDraftOrder.slice(28, 30), 29)}
              <StyledDraftRowBreak>
                <td colSpan={6}>Stanley Cup Final Teams</td>
              </StyledDraftRowBreak>
              {renderLotteryTable(simDraftOrder.slice(30, 32), 31)}
            </TableBody>
          ) : (
            <></>
          )}
        </StyledDraftTable>
      </StyledTableContainer>
    </StyledDraftSimWrapper>
  );
}
