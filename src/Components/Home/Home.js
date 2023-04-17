import useFetch from "../../Utils/useFetch";
import Scoreboard from "./Scoreboard/Scoreboard";
import WidgetContainer from "./Widgets/WidgetContainer";
import useLogos from "../../Utils/useLogos";
import { useEffect } from "react";

export default function Home() {
  const espnLogos = useLogos("espn");
  const nhlLogos = useLogos("nhl");

  // For Scoreboard
  const gameInformation = useFetch(
    "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard",
    60000
  );

  //test
  const testInfo = useFetch(
    "https://statsapi.web.nhl.com/api/v1/game/2022030132/feed/live",
    60000
  );

  useEffect(() => console.log(gameInformation), [gameInformation]);

  return (
    <>
      <Scoreboard gameInformation={gameInformation} logos={espnLogos} />
      <WidgetContainer logos={nhlLogos} />
    </>
  );
}
