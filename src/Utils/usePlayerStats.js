import { useEffect, useState } from "react";
import getTeamAbbreviation from "./getTeamAbbreviation";

export default function usePlayerList(playerList, playerTableSettings, season) {
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    if (!playerList || playerList.length === 0) return;

    const fetchPlayerData = () => {
      const playerInfo = playerList.leagueLeaders[0].leaders
        .slice(playerTableSettings.startIndex, playerTableSettings.endIndex)
        .map((player) => {
          return {
            rank: player.rank,
            fullName: player.person.fullName,
            team: getTeamAbbreviation(player.team.name),
            id: player.person.id,
          };
        });
      if (playerTableSettings.sortType === "A") playerInfo.reverse();

      Promise.all(
        playerInfo.map((player) =>
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
    };

    fetchPlayerData();
  }, [
    playerList,
    season,
    playerTableSettings.startIndex,
    playerTableSettings.endIndex,
    playerTableSettings.sortType,
  ]);

  return playerData;
}
