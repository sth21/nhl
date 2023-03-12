import { StyledWidgetContainer } from "../../../StyledComponents/Home/WidgetComponents";

import useFetch from "./../../../Utils/useFetch";
import StandingsWidget from "./StandingsWidget";
import HeadlinesWidget from "./HeadlinesWidget";
import PlayerStatsWidget from "./PlayerStatsWidget";
import DraftWidget from "./DraftWidget";
import SocialMediaWidget from "./SocialMediaWidget";
import TeamStatsWidget from "./TeamStatsWidget";

export default function WidgetContainer(props) {
  // For StandingsWidget
  const standings = useFetch(
    "https://statsapi.web.nhl.com/api/v1/standings/byDivision"
  );

  // For HeadlinesWidget
  const todaysHeadlines = useFetch(
    "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news"
  );

  // For PlayerStatsWidget
  const goalLeaders = useFetch(
    "https://statsapi.web.nhl.com/api/v1/stats/leaders?expand=leaderPlayerFirstName,leaderPlayerLastName,leaderTeam&gameTypes=R&leaderCategories=goals&limit=8"
  );
  const assistLeaders = useFetch(
    "https://statsapi.web.nhl.com/api/v1/stats/leaders?expand=leaderPlayerFirstName,leaderPlayerLastName,leaderTeam&gameTypes=R&leaderCategories=assists&limit=8"
  );
  const pointsLeaders = useFetch(
    "https://statsapi.web.nhl.com/api/v1/stats/leaders?expand=leaderPlayerFirstName,leaderPlayerLastName,leaderTeam&gameTypes=R&leaderCategories=points&limit=8"
  );
  const winsLeaders = useFetch(
    "https://statsapi.web.nhl.com/api/v1/stats/leaders?expand=leaderPlayerFirstName,leaderPlayerLastName,leaderTeam&gameTypes=R&leaderCategories=wins&limit=8"
  );
  const savePercentLeaders = useFetch(
    "https://statsapi.web.nhl.com/api/v1/stats/leaders?expand=leaderPlayerFirstName,leaderPlayerLastName,leaderTeam&gameTypes=R&leaderCategories=savePct&limit=8"
  );

  // For Draft Widget
  const draftStandings = useFetch(
    "https://statsapi.web.nhl.com/api/v1/standings/byLeague"
  );

  // For TeamStatsWidget
  const teamLeaders = useFetch(
    "https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats&season=20222023"
  );

  return (
    <StyledWidgetContainer>
      {standings ? (
        <StandingsWidget standings={standings} logos={props.logos} />
      ) : (
        <></>
      )}
      {todaysHeadlines ? (
        <HeadlinesWidget headlines={todaysHeadlines} />
      ) : (
        <></>
      )}
      {goalLeaders &&
      assistLeaders &&
      pointsLeaders &&
      winsLeaders &&
      savePercentLeaders ? (
        <PlayerStatsWidget
          goalLeaders={goalLeaders}
          assistsLeaders={assistLeaders}
          pointsLeaders={pointsLeaders}
          winsLeaders={winsLeaders}
          savePercentLeaders={savePercentLeaders}
          logos={props.logos}
        />
      ) : (
        <></>
      )}
      {draftStandings ? (
        <DraftWidget
          teams={draftStandings.records[0].teamRecords}
          logos={props.logos}
        />
      ) : (
        <></>
      )}
      <SocialMediaWidget />
      {teamLeaders ? (
        <TeamStatsWidget teams={teamLeaders.teams} logos={props.logos} />
      ) : (
        <></>
      )}
    </StyledWidgetContainer>
  );
}
