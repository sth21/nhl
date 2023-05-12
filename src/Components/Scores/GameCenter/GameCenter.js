import {
  StyledGameCenterGrid,
  StyledScoresWidgetWrapper,
} from "../../../StyledComponents/Scores/ScoresComponents";
import PlayFeed from "./PlayFeedWidget/PlayFeed";
import BoxScore from "./BoxScoreWidget/BoxScore";
import RinkWidget from "./RinkWidget/RinkWidget";
import TeamsStats from "./TeamStatsWidget/TeamsStats";
import PlayerStats from "./PlayerStatsWidget/PlayerStats";

/* 
          import BoxScoreWidget from "./BoxScoreWidget/BoxScoreWidget";
          import TeamStatsWidget from "./TeamStatsWidget/TeamStatsWidget";
          import PlayerStatsWidget from "./PlayerStatsWidget/PlayerStatsWidget";
          import PlayFeedWidget from "./PlayFeedWidget/PlayFeedWidget";

          <BoxScoreWidget style={{ gridArea: "0 / 0 / 1 / 1" }} />
          <TeamStatsWidget style={{ gridArea: "1 / 0 / 2 / 1" }} />
          <PlayerStatsWidget style={{ gridArea: "2 / 0 / 3 / 1" }} />
          <PlayFeedWidget style={{ gridArea: "1 / 1 / 3 / 2" }} />
*/

export default function GameCenter(props) {
  return (
    <StyledGameCenterGrid>
      <StyledScoresWidgetWrapper style={{ gridArea: "1 / 2 / 3 / 3" }}>
        <RinkWidget scores={props.scores} logos={props.logos} />
      </StyledScoresWidgetWrapper>
      <StyledScoresWidgetWrapper style={{ gridArea: "3 / 2 / 11 / 3" }}>
        <PlayFeed
          liveData={props.scores.liveData}
          isPlayoff={props.scores.gameData.game.type === "P"}
          logos={props.logos}
        />
      </StyledScoresWidgetWrapper>
      <StyledScoresWidgetWrapper>
        <BoxScore
          logos={props.logos}
          liveData={props.scores.liveData}
          isPlayoff={props.scores.gameData.game.type === "P"}
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
            props.scores.liveData.boxscore.teams.home.teamStats.teamSkaterStats
          }
          homeTeamName={props.scores.liveData.boxscore.teams.home.team.triCode}
          awayTeamStats={
            props.scores.liveData.boxscore.teams.away.teamStats.teamSkaterStats
          }
          awayTeamName={props.scores.liveData.boxscore.teams.away.team.triCode}
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
          teamPlayers={props.scores.liveData.boxscore.teams.home.players}
          teamName={props.scores.liveData.boxscore.teams.home.team.triCode}
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
          teamPlayers={props.scores.liveData.boxscore.teams.away.players}
          teamName={props.scores.liveData.boxscore.teams.away.team.triCode}
        />
      </StyledScoresWidgetWrapper>
    </StyledGameCenterGrid>
  );
}
