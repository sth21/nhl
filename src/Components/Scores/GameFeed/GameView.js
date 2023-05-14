import { Link } from "react-router-dom";
import useFetch from "../../../Utils/useFetch";

export default function GameView({ gameId, logos }) {
  const scores = useFetch(
    `https://statsapi.web.nhl.com/api/v1/game/${gameId}/feed/live`
  );

  console.log(scores);

  function scoreFeed(plays, team) {
    const goals = plays.scoringPlays
      .filter((playIndex) => plays.allPlays[playIndex].team.name === team)
      .map(
        (playIndex) =>
          `${plays.allPlays[playIndex].about.periodTimeRemaining} ${plays.allPlays[playIndex].about.ordinalNum}: ${plays.allPlays[playIndex].players[0].player.fullName} 
          (${plays.allPlays[playIndex].players[0].seasonTotal})`
      );
    return goals.join(" | ");
  }

  return (
    scores && (
      <div>
        <div>
          <div>
            <img
              src={
                logos ? logos[scores.liveData.boxscore.teams.home.team.id] : "#"
              }
              alt="team logo"
            />
            <p>{scores.liveData.boxscore.teams.home.team.abbreviation}</p>
            <p>{scores.liveData.linescore.teams.home.goals}</p>
          </div>
          <div>
            <img
              src={
                logos ? logos[scores.liveData.boxscore.teams.away.team.id] : "#"
              }
              alt="team logo"
            />
            <p>{scores.liveData.boxscore.teams.away.team.abbreviation}</p>
            <p>{scores.liveData.linescore.teams.away.goals}</p>
          </div>
        </div>
        <div>
          <p>{`${scores.liveData.linescore.currentPeriodTimeRemaining} - ${scores.liveData.linescore.currentPeriodOrdinal}`}</p>
          <p>{scores.gameData.venue.name}</p>
        </div>
        {parseInt(scores.gameData.status.statusCode, 10) !== 1 ? (
          <div>
            <p>
              {scoreFeed(
                scores.liveData.plays,
                scores.gameData.teams.home.name
              )}
            </p>
            <p>
              {scoreFeed(
                scores.liveData.plays,
                scores.gameData.teams.away.name
              )}
            </p>
          </div>
        ) : (
          <></>
        )}
        <Link
          to={`/scores/${gameId}`}
          disabled={parseInt(scores.gameData.status.statusCode, 10) === 1}
        >
          GameCenter
        </Link>
      </div>
    )
  );
}
