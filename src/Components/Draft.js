/*

DRAFT LOTTERY RULES:
There are two draws

A team can only move up 10 positions

A team cannot win a lottery more than twice in five years

if a team NOT in the top 11 positions wins the first draw, than the top team becomes "locked into" the first draft pick
any team which wins the lottery is "locked into" their respective position

if a team IN the top 11 positions wins the first draw, than only they are "locked into" any position (the first overall selection)

In the second lottery, if a team which is "locked into" their position is selected, than the draft order is maintained

Each team => { originalTeam, newTeam, protectionStatus, eligibility  }

Odds: [ .185, .135, .115, .095, .085, .075, .065, .06, .05, .035, .03, .025, .02, .015, .005, .005 ]

*/

const teams = [
  { name: "CBJ", odds: 0.185 },
  { name: "SJS", odds: 0.135 },
  { name: "ANA", odds: 0.115 },
  { name: "CHI", odds: 0.095 },
  { name: "MON", odds: 0.085 },
  { name: "PHI", odds: 0.075 },
  { name: "ARI", odds: 0.065 },
  { name: "VAN", odds: 0.06 },
  { name: "STL", odds: 0.05 },
  { name: "OTT", odds: 0.035 },
  { name: "DET", odds: 0.03 },
  { name: "WAS", odds: 0.025 },
  { name: "BUF", odds: 0.02 },
  { name: "CAL", odds: 0.015 },
  { name: "FLA", odds: 0.005 },
  { name: "NSH", odds: 0.005 },
];

/* 
  NEED TO ADD:
    Team does not own pick
      Team has pick protected
      Team does not have pick protected
    Change in position added to object
*/

export default function Draft() {
  function lottery() {
    let cumulativeFrequency = 0;
    const selection = Math.random();
    return teams.find((team, index) => {
      cumulativeFrequency += team.odds;
      return selection < cumulativeFrequency;
    });
  }

  function calculateNewPosition(start) {
    return start - 10 > 0 ? start - 10 : 0;
  }

  function shift(teams, start, end) {
    console.table([start, end]);
    if (start === end) return teams;
    if (teams[end].locked) end += 1;

    const winner = teams[start];
    const tempTeams = teams.slice(0, start).concat(teams.slice(start + 1));
    return teams.slice(0, end).concat(winner).concat(tempTeams.slice(end));
  }

  function simDraftLottery(teams) {
    let tempTeams = JSON.parse(JSON.stringify(teams));
    console.log(tempTeams);

    const firstLottery = lottery(tempTeams);
    const firstWinnerIndex = tempTeams.findIndex(
      (team) => team.name === firstLottery.name
    );
    const firstWinner = tempTeams[firstWinnerIndex];
    firstWinner.locked = true; // Lock winner into their position
    if (calculateNewPosition(firstWinner) !== 0) tempTeams[0].locked = true; // Lock #1 into #1 if !T-10 wins lottery #1

    tempTeams = shift(
      tempTeams,
      firstWinnerIndex,
      calculateNewPosition(firstWinnerIndex)
    );

    const secondLottery = lottery(tempTeams);
    const secondWinnerIndex = tempTeams.findIndex(
      (team) => team.name === secondLottery.name
    );
    const secondWinner = tempTeams[secondWinnerIndex];
    secondWinner.locked = true; // Lock winner into their position

    tempTeams = shift(
      tempTeams,
      secondWinnerIndex,
      calculateNewPosition(secondWinnerIndex)
    );

    console.log("W1: " + JSON.stringify(firstWinner));
    console.log("W2: " + JSON.stringify(secondWinner));
    console.log(tempTeams);
  }

  simDraftLottery(teams);

  return <div>Draft</div>;
}
