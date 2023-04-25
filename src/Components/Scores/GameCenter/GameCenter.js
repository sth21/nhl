import {
  StyledGameCenterGrid,
  StyledScoresWidgetWrapper,
} from "../../../StyledComponents/Scores/ScoresComponents";
import RinkWidget from "./RinkWidget/RinkWidget";

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
      <StyledScoresWidgetWrapper style={{ gridArea: "1 / 2 / 2 / 3" }}>
        <RinkWidget scores={props.scores} logos={props.logos} />
      </StyledScoresWidgetWrapper>
    </StyledGameCenterGrid>
  );
}
