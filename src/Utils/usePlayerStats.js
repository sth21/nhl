import { useEffect, useState } from "react";
import getTeamAbbreviation from "./getTeamAbbreviation";

export default function usePlayerList(skaterList, skaterTableSettings, season) {
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    console.log("USE PLAYER STATS");
    if (!skaterList || skaterList.length === 0) return;

    const fetchPlayerData = () =>
      Promise.all(
        skaterList.leagueLeaders[0].leaders
          .slice(skaterTableSettings.startIndex, skaterTableSettings.endIndex)
          .map((player) => {
            return {
              rank: player.rank,
              fullName: player.person.fullName,
              team: getTeamAbbreviation(player.team.name),
              id: player.person.id,
            };
          })
          .map((player) =>
            fetch(
              `https://statsapi.web.nhl.com/api/v1/people/${player.id}/stats?stats=statsSingleSeason&season=${season}`,
              { mode: "cors" }
            )
              .then((res) => res.json())
              .then((res) => {
                return {
                  rank: player.rank,
                  fullName: player.fullName,
                  team: player.team,
                  stats: res.stats[0].splits[0].stat,
                };
              })
          )
      ).then((res) => setPlayerData(res));

    fetchPlayerData();
  }, [
    skaterList,
    season,
    skaterTableSettings.startIndex,
    skaterTableSettings.endIndex,
  ]);

  return playerData;
}
