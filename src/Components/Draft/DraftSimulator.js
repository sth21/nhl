import {
  StyledDraftRowBreak,
  StyledDraftTable,
  StyledDraftTableHeader,
  StyledDraftOption,
} from "../../StyledComponents/Draft/DraftComponents";
import {
  StyledTableContainer,
  StyledOptionContainer,
  StyledPageHeader,
  StyledPageContentWrapper,
} from "./../../StyledComponents/General/GeneralComponents";
import { TableBody, TableHead, TableRow } from "@mui/material";
import LotteryTable from "./LotteryTable";
import { useState } from "react";
import "balloon-css";

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

  return (
    <StyledPageContentWrapper>
      <StyledPageHeader>Draft Lottery Simulator</StyledPageHeader>
      <StyledOptionContainer>
        <StyledDraftOption
          onClick={() => setSimDraftOrder(simDraftLottery(defaultDraftOrder))}
        >
          Simulate Lottery
        </StyledDraftOption>
        <StyledDraftOption onClick={() => setSimDraftOrder(defaultDraftOrder)}>
          Reset
        </StyledDraftOption>
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
              <LotteryTable
                originalDraftOrder={defaultDraftOrder}
                teams={simDraftOrder.slice(0, 16)}
                startingIndex={1}
                isDefault={defaultDraftOrder === simDraftOrder}
                logos={props.logos}
              />
              <StyledDraftRowBreak>
                <td colSpan={6}>End of Lottery</td>
              </StyledDraftRowBreak>
              <LotteryTable
                originalDraftOrder={defaultDraftOrder}
                simDraftOrder={simDraftOrder}
                teams={simDraftOrder.slice(16, 28)}
                startingIndex={17}
                isDefault={defaultDraftOrder === simDraftOrder}
                logos={props.logos}
              />
              <StyledDraftRowBreak>
                <td colSpan={6}>Conference Final Losers</td>
              </StyledDraftRowBreak>
              <LotteryTable
                originalDraftOrder={defaultDraftOrder}
                simDraftOrder={simDraftOrder}
                teams={simDraftOrder.slice(28, 30)}
                startingIndex={29}
                isDefault={defaultDraftOrder === simDraftOrder}
                logos={props.logos}
              />
              <StyledDraftRowBreak>
                <td colSpan={6}>Stanley Cup Final Teams</td>
              </StyledDraftRowBreak>
              <LotteryTable
                originalDraftOrder={defaultDraftOrder}
                simDraftOrder={simDraftOrder}
                teams={simDraftOrder.slice(30, 32)}
                startingIndex={31}
                isDefault={defaultDraftOrder === simDraftOrder}
                logos={props.logos}
              />
            </TableBody>
          ) : (
            <></>
          )}
        </StyledDraftTable>
      </StyledTableContainer>
    </StyledPageContentWrapper>
  );
}
