import PlayLocationRink from "./PlayLocationRink";
import useFetch from "./../../Utils/useFetch";
import useLogos from "./../../Utils/useLogos";
import ScoresData from "./../../ScoresData";
import { useEffect } from "react";

export default function Scores() {
  /* const scores = useFetch(
    "https://statsapi.web.nhl.com/api/v1/game/2022021302/feed/live"
  ); */

  const scores = ScoresData;

  // const logos = useLogos("nhl");

  useEffect(() => {
    console.log(scores);
  }, [scores]);

  return scores ? (
    <PlayLocationRink
      plays={scores.liveData.plays.allPlays}
      // homeTeamLogo={logos[scores.gameData.teams.home.id]}
    />
  ) : (
    <></>
  );
}
