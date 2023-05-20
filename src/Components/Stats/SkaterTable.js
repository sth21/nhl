import { useState, useMemo } from "react";
import useFetch from "../../Utils/useFetch";
import usePlayerStats from "../../Utils/usePlayerStats";
import Sort from "../../Utils/Sort";

export default function SkaterTable({ tableSettings }) {
  // Define player table settings
  const [playerTableSettings, setPlayerTableSettings] = useState({
    sortParam: "pts",
    sortType: "A",
    startIndex: 0,
    endIndex: 50,
  });

  // Import raw data from api
  const skaterList = useFetch(
    `https://statsapi.web.nhl.com/api/v1/stats/leaders?expand=leaderPlayerFirstName,leaderPlayerLastName,leaderTeam&gameTypes=R&leaderCategories=${playerTableSettings.sortParam}&limit=1000&season=${tableSettings.season}`
  );

  // Obtain array of skater id numbers for stat lookup
  const skaterData = usePlayerStats(
    skaterList
      ? skaterList.leagueLeaders[0].leaders
          .slice(playerTableSettings.startIndex, playerTableSettings.endIndex)
          .map((player) => player.person.id)
      : [],
    tableSettings.season
  );

  // Sort statistics based on table settings
  const sortedSkaterStats = useMemo(() => {
    if (skaterData === null) return;
    if (playerTableSettings.sortType === "A") {
      return [...skaterData].sort((a, b) =>
        Sort.ascending(a, b, playerTableSettings.sortParam)
      );
    } else {
      return [...skaterData].sort((a, b) =>
        Sort.descending(a, b, playerTableSettings.sortParam)
      );
    }
  }, [skaterData, playerTableSettings.sortParam, playerTableSettings.sortType]);

  // return table
}
