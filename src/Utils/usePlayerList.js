import { useEffect, useState } from "react";

export default function usePlayerList(playerIds, season) {
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const url = (playerId, season) =>
      `https://statsapi.web.nhl.com/api/v1/people/${playerId}/stats?stats=statsSingleSeason&season=${season}`;

    const fetchPlayerData = () =>
      Promise.all(
        playerIds.map((playerId) =>
          fetch(url(playerId, season), { mode: "cors" })
            .then((res) => res.json())
            .then((res) => res.stats[0].splits[0].stat)
        )
      ).then((res) => setPlayerData(res));

    fetchPlayerData();
  }, [playerIds, season]);

  return playerData;
}
