import PlayLocationRink from "./PlayLocationRink";
import PlayersOnIceWidget from "./PlayersOnIceWidget";
import useFetch from "./../../Utils/useFetch";
import useLogos from "./../../Utils/useLogos";

// "https://statsapi.web.nhl.com/api/v1/schedule?teamId=2&opponentId=12&season=20222023"

export default function Scores() {
  const scores = useFetch(
    "https://statsapi.web.nhl.com/api/v1/game/2022030172/feed/live",
    30000
  );
  const logos = useLogos("nhl");

  console.log(scores);

  return scores && logos ? (
    <>
      <PlayLocationRink
        plays={scores.liveData.plays.allPlays}
        homeTeamLogo={logos[scores.gameData.teams.home.id]}
        logos={logos}
      />
      <PlayersOnIceWidget liveData={scores.liveData} logos={logos} />
    </>
  ) : (
    <></>
  );
}
