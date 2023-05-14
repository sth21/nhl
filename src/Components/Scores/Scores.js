import GameFeed from "./GameFeed/GameFeed";
import useFetch from "./../../Utils/useFetch";
import useLogos from "./../../Utils/useLogos";
import { useState, useCallback, useMemo } from "react";
import moment from "moment";

export default function Scores() {
  const todaysDate = moment().format("YYYY-MM-DD");
  const logos = useLogos("nhl");
  const [date, setDate] = useState(todaysDate);
  const games = useFetch(
    `https://statsapi.web.nhl.com/api/v1/schedule?date=${date}`
  );
  const memoizedGames = useMemo(
    () => (games && games.dates.length > 0 ? games.dates[0].games : []),
    [games]
  );
  const handleSetDate = useCallback(
    (newDate) => {
      setDate(newDate);
    },
    [setDate]
  );

  return games && logos ? (
    <>
      <GameFeed
        logos={logos}
        games={memoizedGames}
        date={date}
        setDate={handleSetDate}
      />
    </>
  ) : (
    <></>
  );
}
