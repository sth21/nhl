import { TableBody } from "@mui/material";
import {
  StyledTableContainer,
  StyledPageTable,
} from "../../StyledComponents/General/GeneralComponents";
import uniqid from "uniqid";
import { useMemo, useState } from "react";
import Sort from "./../../Utils/Sort";
import TeamTableRow from "./TeamTableRow";
import TeamTableHeader from "./TeamTableHeader";
import useFetch from "../../Utils/useFetch";

// season => formatted one
export default function TeamTable({ tableSettings }) {
  const [teamTableSettings, setTeamTableSettings] = useState({
    sortParam: "pts",
    sortType: "A",
  });

  const teamData = useFetch(
    `https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats&season=${tableSettings.season}`
  );

  const sortedTeamStats = useMemo(() => {
    if (teamData === null) return;
    if (teamTableSettings.sortType === "A") {
      return [...teamData.teams].sort((a, b) =>
        Sort.ascending(
          a.teamStats[0].splits[0].stat,
          b.teamStats[0].splits[0].stat,
          teamTableSettings.sortParam
        )
      );
    } else {
      return [...teamData.teams].sort((a, b) =>
        Sort.descending(
          a.teamStats[0].splits[0].stat,
          b.teamStats[0].splits[0].stat,
          teamTableSettings.sortParam
        )
      );
    }
  }, [teamData, teamTableSettings.sortType, teamTableSettings.sortParam]);

  return (
    sortedTeamStats && (
      <StyledTableContainer>
        <StyledPageTable>
          <TeamTableHeader
            tableOptions={teamTableSettings}
            setTableOptions={setTeamTableSettings}
          />
          <TableBody>
            {sortedTeamStats.map((team, index) => (
              <TeamTableRow
                team={team}
                index={index + 1}
                year={tableSettings.season}
                key={uniqid()}
              />
            ))}
          </TableBody>
        </StyledPageTable>
      </StyledTableContainer>
    )
  );
}
