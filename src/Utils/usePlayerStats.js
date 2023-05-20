import { useEffect, useState } from "react";

export default function usePlayerList(players, season) {
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    if (players === []) return;

    const url = (playerId, season) =>
      `https://statsapi.web.nhl.com/api/v1/people/${playerId}/stats?stats=statsSingleSeason&season=${season}`;

    const fetchPlayerData = () =>
      Promise.all(
        players.map((player) =>
          fetch(url(player.id, season), { mode: "cors" })
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
  }, [players, season]);

  return playerData;
}
