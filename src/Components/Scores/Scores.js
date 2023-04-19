import PlayLocationRink from "./PlayLocationRink";
import useFetch from "./../../Utils/useFetch";
import useLogos from "./../../Utils/useLogos";
import { useEffect } from "react";

// "https://statsapi.web.nhl.com/api/v1/schedule?teamId=2&opponentId=12&season=20222023"

// liveData.boxscore.teams.away.onIce (ex. 8473986 -> )
// liveData.boxscore.teams.away.players.ID[code]

export default function Scores() {
  const scores = useFetch(
    "https://statsapi.web.nhl.com/api/v1/game/2022030121/feed/live",
    30000
  );
  const logos = useLogos("nhl");

  useEffect(() => {
    if (!scores) return;
    console.log(scores);
  }, [scores]);

  useEffect(() => {
    if (!scores) return;
    console.log("-------HOME PLAYERS------");
    scores.liveData.boxscore.teams.home.onIce.forEach((playerOnIce) =>
      console.log(
        scores.liveData.boxscore.teams.home.players[`ID${playerOnIce}`].person
          .fullName
      )
    );
    console.log("-------AWAY PLAYERS------");
    scores.liveData.boxscore.teams.away.onIce.forEach((playerOnIce) =>
      console.log(
        scores.liveData.boxscore.teams.away.players[`ID${playerOnIce}`].person
          .fullName
      )
    );
  }, [scores]);

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
