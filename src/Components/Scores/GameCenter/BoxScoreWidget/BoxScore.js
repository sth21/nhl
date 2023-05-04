// props.logos
// props.liveData

import { useMemo } from "react";

export default function BoxScore(props) {
  const scoringByPeriod = useMemo(
    () => getScoringData(props.liveData.plays),
    [props.liveData]
  );

  function getScoringData(playsInfo, numPeriods, teams) {
    return new Array(numPeriods).fill(0).map((val, periodNum) => {
      return playsInfo.scoringPlays
        .filter(
          (playNum) => playNum < playsInfo.playsByPeriod[periodNum].endIndex
        )
        .reduce(
          (acc, cur) => {
            if (playsInfo.allPlays[cur].team.name === teams.home.team.name)
              acc.home++;
            else acc.away++;
            return acc;
          },
          { home: 0, away: 0 }
        );
    });
  }
}
