import { Link } from "react-router-dom";
import useFetch from "../../../Utils/useFetch";
import {
  StyledGameFeedWidgetWrapper,
  StyledGameFeedLogo,
  StyledGameFeedBigText,
  StyledGameFeedFlex,
  StyledGameViewBox,
  StyledGameViewText,
} from "../../../StyledComponents/Scores/ScoresComponents";

export default function GameView({ gameId, logos }) {
  const scores = useFetch(
    `https://statsapi.web.nhl.com/api/v1/game/${gameId}/feed/live`
  );

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
      <StyledGameFeedWidgetWrapper>
        <StyledGameViewBox>
          <StyledGameFeedFlex>
            <StyledGameFeedLogo
              src={
                logos ? logos[scores.liveData.boxscore.teams.home.team.id] : "#"
              }
              alt="team logo"
            />
            <StyledGameFeedBigText>
              {scores.liveData.boxscore.teams.home.team.abbreviation}
            </StyledGameFeedBigText>
            <StyledGameFeedBigText>
              {scores.liveData.linescore.teams.home.goals}
            </StyledGameFeedBigText>
          </StyledGameFeedFlex>
          <StyledGameFeedFlex>
            <StyledGameFeedLogo
              src={
                logos ? logos[scores.liveData.boxscore.teams.away.team.id] : "#"
              }
              alt="team logo"
            />
            <StyledGameFeedBigText>
              {scores.liveData.boxscore.teams.away.team.abbreviation}
            </StyledGameFeedBigText>
            <StyledGameFeedBigText>
              {scores.liveData.linescore.teams.away.goals}
            </StyledGameFeedBigText>
          </StyledGameFeedFlex>
        </StyledGameViewBox>
        <StyledGameViewBox>
          <StyledGameViewText>{`${scores.liveData.linescore.currentPeriodTimeRemaining} - ${scores.liveData.linescore.currentPeriodOrdinal}`}</StyledGameViewText>
          <StyledGameViewText>{scores.gameData.venue.name}</StyledGameViewText>
        </StyledGameViewBox>
        {parseInt(scores.gameData.status.statusCode, 10) !== 1 ? (
          <StyledGameViewBox>
            <StyledGameViewText>
              {scoreFeed(
                scores.liveData.plays,
                scores.gameData.teams.home.name
              )}
            </StyledGameViewText>
            <StyledGameViewText>
              {scoreFeed(
                scores.liveData.plays,
                scores.gameData.teams.away.name
              )}
            </StyledGameViewText>
          </StyledGameViewBox>
        ) : (
          <></>
        )}
        <StyledGameViewBox>
          <Link
            to={`/scores/${gameId}`}
            disabled={parseInt(scores.gameData.status.statusCode, 10) === 1}
          >
            GameCenter
          </Link>
        </StyledGameViewBox>
      </StyledGameFeedWidgetWrapper>
    )
  );
}
