import PlayLocationRink from "./PlayLocationRink";
import useFetch from "./../../Utils/useFetch";
import useLogos from "./../../Utils/useLogos";
import { useEffect } from "react";

export default function Scores() {
  const scores = useFetch(
    "https://statsapi.web.nhl.com/api/v1/game/2022021310/feed/live"
  );
  const seasonSeries = useFetch(
    "https://statsapi.web.nhl.com/api/v1/schedule?teamId=2&opponentId=12&season=20222023"
  );
  const logos = useLogos("nhl");

  useEffect(() => {
    console.log(scores);
  }, [scores]);

  useEffect(() => {
    console.log(seasonSeries);
  }, [seasonSeries]);

  return scores && logos ? (
    <PlayLocationRink
      plays={scores.liveData.plays.allPlays}
      homeTeamLogo={logos[scores.gameData.teams.home.id]}
      logos={logos}
    />
  ) : (
    <></>
  );
}
