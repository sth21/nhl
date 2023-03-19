import { useState, useEffect } from "react";
import uniqid from "uniqid";
import downArrow from "./../../Media/down-arrow.png";
import upArrow from "./../../Media/up-arrow.png";

export default function DraftSimulator(props) {
  console.log(props);

  const defaultDraftOrder = props.draftOrder;
  const [simDraftOrder, setSimDraftOrder] = useState(defaultDraftOrder);

  useEffect(() => console.log(defaultDraftOrder), [defaultDraftOrder]);

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

    // For testing purposes
    console.log("W1: " + JSON.stringify(firstWinner));
    console.log("W2: " + JSON.stringify(secondWinner));
    console.table(tempTeams);

    return tempTeams;
  }

  return (
    <div>
      <div>
        <button
          onClick={() => setSimDraftOrder(simDraftLottery(defaultDraftOrder))}
        >
          Simulate Lottery
        </button>
        <button onClick={() => setSimDraftOrder(defaultDraftOrder)}>
          Reset
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Pick</th>
            <th>Team</th>
          </tr>
        </thead>
        {simDraftOrder ? (
          <tbody>
            {simDraftOrder.map((team, index) => (
              <tr key={uniqid()}>
                <td>
                  {index + 1}
                  {team.positionShift !== 0 && team.positionShift ? (
                    <img
                      src={team.positionShift > 0 ? upArrow : downArrow}
                      alt="arrow"
                    ></img>
                  ) : (
                    <></>
                  )}
                  {team.positionShift === 0 ? "" : team.positionShift}
                </td>
                <td>
                  {team.name}
                  <img
                    src={props.logos ? props.logos[parseInt(team.id, 10)] : "#"}
                    alt="team logo"
                  ></img>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <></>
        )}
      </table>
    </div>
  );
}
