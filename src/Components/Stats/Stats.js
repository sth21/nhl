import moment from "moment";
import useFetch from "./../../Utils/useFetch";
import { useState, useMemo } from "react";
import StatsTable from "./StatsTable";
import {
  StyledPageWrapper,
  StyledPageContentWrapper,
  StyledPageHeader,
} from "../../StyledComponents/General/GeneralComponents";

export default function Stats() {
  const currentYear = moment().year();
  const formattedCurrentYear =
    moment().month() > 8
      ? `${currentYear}${currentYear + 1}`
      : `${currentYear - 1}${currentYear}`;

  const [tableOptions, setTableOptions] = useState({
    type: "Team",
    year: formattedCurrentYear,
    sortParam: "pts",
    sortType: "A",
    playerEndIndex: 49,
  });

  const teamStats = useFetch(
    `https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats&season=${tableOptions.year}`
  );

  const sortedTeamStats = useMemo(() => {
    if (teamStats === null) return;
    if (tableOptions.sortType === "A") {
      return [...teamStats.teams].sort((a, b) =>
        sortAscending(
          a.teamStats[0].splits[0].stat,
          b.teamStats[0].splits[0].stat,
          tableOptions.sortParam
        )
      );
    } else {
      return [...teamStats.teams].sort((a, b) =>
        sortDescending(
          a.teamStats[0].splits[0].stat,
          b.teamStats[0].splits[0].stat,
          tableOptions.sortParam
        )
      );
    }
  }, [teamStats, tableOptions.sortType, tableOptions.sortParam]);

  function sortAscending(a, b, accessor) {
    return a[accessor] - b[accessor];
  }

  function sortDescending(a, b, accessor) {
    return b[accessor] - a[accessor];
  }

  return sortedTeamStats && tableOptions && setTableOptions ? (
    <StyledPageWrapper>
      <StyledPageContentWrapper>
        <StyledPageHeader>{tableOptions.type + " Statistics"}</StyledPageHeader>
        <StatsTable
          teamStats={sortedTeamStats}
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
      </StyledPageContentWrapper>
    </StyledPageWrapper>
  ) : (
    <></>
  );
}
