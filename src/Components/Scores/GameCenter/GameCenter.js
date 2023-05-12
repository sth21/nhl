import {
  StyledGameCenterGrid,
  StyledScoresWidgetWrapper,
} from "../../../StyledComponents/Scores/ScoresComponents";
import PlayFeed from "./PlayFeedWidget/PlayFeed";
import BoxScore from "./BoxScoreWidget/BoxScore";
import RinkWidget from "./RinkWidget/RinkWidget";
import TeamsStats from "./TeamStatsWidget/TeamsStats";
import PlayerStats from "./PlayerStatsWidget/PlayerStats";
import { useParams } from "react-router-dom";
import useFetch from "../../../Utils/useFetch";

export default function GameCenter(props) {
  const { gameId } = useParams();

  const scores = useFetch(
    `https://statsapi.web.nhl.com/api/v1/game/${gameId}/feed/live`
  );

  return (
    scores && (
      <StyledGameCenterGrid>
        <StyledScoresWidgetWrapper style={{ gridArea: "1 / 2 / 3 / 3" }}>
          <RinkWidget scores={scores} logos={props.logos} />
        </StyledScoresWidgetWrapper>
        <StyledScoresWidgetWrapper style={{ gridArea: "3 / 2 / 11 / 3" }}>
          <PlayFeed
            liveData={scores.liveData}
            isPlayoff={scores.gameData.game.type === "P"}
            logos={props.logos}
          />
        </StyledScoresWidgetWrapper>
        <StyledScoresWidgetWrapper>
          <BoxScore
            logos={props.logos}
            liveData={scores.liveData}
            isPlayoff={scores.gameData.game.type === "P"}
          />
        </StyledScoresWidgetWrapper>
        <StyledScoresWidgetWrapper
          style={{
            gridArea: "2 / 1 / 4 / 2",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TeamsStats
            homeTeamStats={
              scores.liveData.boxscore.teams.home.teamStats.teamSkaterStats
            }
            homeTeamName={scores.liveData.boxscore.teams.home.team.triCode}
            awayTeamStats={
              scores.liveData.boxscore.teams.away.teamStats.teamSkaterStats
            }
            awayTeamName={scores.liveData.boxscore.teams.away.team.triCode}
          />
        </StyledScoresWidgetWrapper>
        <StyledScoresWidgetWrapper
          style={{
            gridArea: "4 / 1 / 8 / 2",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PlayerStats
            teamPlayers={scores.liveData.boxscore.teams.home.players}
            teamName={scores.liveData.boxscore.teams.home.team.triCode}
          />
        </StyledScoresWidgetWrapper>
        <StyledScoresWidgetWrapper
          style={{
            gridArea: "8 / 1 / 12 / 2",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PlayerStats
            teamPlayers={scores.liveData.boxscore.teams.away.players}
            teamName={scores.liveData.boxscore.teams.away.team.triCode}
          />
        </StyledScoresWidgetWrapper>
      </StyledGameCenterGrid>
    )
  );
}
