import GameCenter from "./GameCenter/GameCenter";
import useFetch from "./../../Utils/useFetch";
import useLogos from "./../../Utils/useLogos";

// "https://statsapi.web.nhl.com/api/v1/schedule?teamId=2&opponentId=12&season=20222023"

export default function Scores() {
  const scores = useFetch(
    "https://statsapi.web.nhl.com/api/v1/game/2022030117/feed/live",
    30000
  );

  console.log(scores ? scores : "");

  const logos = useLogos("nhl");

  return scores && logos ? (
    <>
      <GameCenter scores={scores} logos={logos} />
    </>
  ) : (
    <></>
  );
}
