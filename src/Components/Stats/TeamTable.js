import { TableBody } from "@mui/material";
import {
  StyledTableContainer,
  StyledPageTable,
  TeamTableHeader,
  TeamTableRow,
} from "../../StyledComponents/General/GeneralComponents";
import uniqid from "uniqid";
import { useMemo, useState } from "react";
import Sort from "./../../Utils/Sort";

// season => formatted one
export default function TeamTable({ teamData, season }) {
  const [tableSettings, setTableSettings] = useState({
    type: "Team",
    year: season,
    sortParam: "pts",
    sortType: "A",
  });

  const sortedTeamStats = useMemo(() => {
    if (teamData === null) return;
    if (tableSettings.sortType === "A") {
      return [...teamData.teams].sort((a, b) =>
        Sort.ascending(
          a.teamStats[0].splits[0].stat,
          b.teamStats[0].splits[0].stat,
          tableSettings.sortParam
        )
      );
    } else {
      return [...teamData.teams].sort((a, b) =>
        Sort.descending(
          a.teamStats[0].splits[0].stat,
          b.teamStats[0].splits[0].stat,
          tableSettings.sortParam
        )
      );
    }
  }, [teamData, tableSettings.sortType, tableSettings.sortParam]);

  return (
    sortedTeamStats && (
      <StyledTableContainer>
        <StyledPageTable>
          <TeamTableHeader
            tableOptions={tableSettings}
            setTableOptions={setTableSettings}
          />
          <TableBody>
            {sortedTeamStats.map((team, index) => (
              <TeamTableRow
                team={team}
                index={index + 1}
                year={season}
                key={uniqid()}
              />
            ))}
          </TableBody>
        </StyledPageTable>
      </StyledTableContainer>
    )
  );
}
