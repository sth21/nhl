import GameFeed from "./GameFeed/GameFeed";
import useFetch from "./../../Utils/useFetch";
import useLogos from "./../../Utils/useLogos";

// "https://statsapi.web.nhl.com/api/v1/schedule?teamId=2&opponentId=12&season=20222023"

export default function Scores() {
  const games = useFetch("https://statsapi.web.nhl.com/api/v1/schedule");
  const logos = useLogos("nhl");

  return games && logos ? (
    <>
      <GameFeed logos={logos} games={games.dates[0].games} />
    </>
  ) : (
    <></>
  );
}
