import PlayersOnIceRink from "./PlayersOnIceRink";

// props.teamInfo === scores.liveData.boxscore.teams
export default function PlayersOnIceWidget(props) {
  const teamsInfo = props.teamsInfo;

  // option is "L" or "R"
  // sorts forwards according to side of rink team is on
  function sortForwards(forwards, option) {
    function valueFnLCR(pos) {
      if (pos === "L") return 1;
      if (pos === "C") return 0;
      if (pos === "R") return -1;
    }

    function valueFnRCL(pos) {
      if (pos === "L") return -1;
      if (pos === "C") return 0;
      if (pos === "R") return 1;
    }

    const valueFn = option === "L" ? valueFnLCR : valueFnRCL;

    return forwards.sort((a, b) => valueFn(b) - valueFn(a));
  }

  // option is "home" or "away"
  // returns the players a team has on the ice by position
  function getTeamPlayersOnIce(option) {
    const team = teamsInfo[option];
    const players = team.onIce.map((playerid) => team.players[`ID${playerid}`]);
    const forwards = players.filter(
      (player) => player.position.type === "Forward"
    );
    const defenseman = players.filter(
      (player) => player.position.type === "Defenseman"
    );
    const goalies = players.filter(
      (player) => player.position.type === "Goalie"
    );

    return {
      forwards: sortForwards(forwards, getTeamSide(option)),
      defenseman: defenseman,
      goalies: goalies,
    };
  }

  // option is "home" or "away"
  // get a teams side for a given period
  function getTeamSide(period, option) {
    if (period === 1 || period === 3) {
      return option === "home" ? "R" : "L";
    } else {
      return option === "home" ? "L" : "R";
    }
  }

  return <PlayersOnIceRink />;
}
