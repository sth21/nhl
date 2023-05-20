import { useState, useMemo } from "react";
import getTeamAbbreviation from "../../Utils/getTeamAbbreviation";
import useFetch from "../../Utils/useFetch";
import usePlayerStats from "../../Utils/usePlayerStats";
import Sort from "../../Utils/Sort";
import uniqid from "uniqid";
import {
  StyledTableContainer,
  StyledPageTable,
} from "../../StyledComponents/General/GeneralComponents";
import { TableBody } from "@mui/material";
import SkaterTableRow from "./SkaterTableRow";
import SkaterTableHeader from "./SkaterTableHeader";

export default function SkaterTable({ tableSettings }) {
  // Define player table settings
  const [skaterTableSettings, setSkaterTableSettings] = useState({
    sortParam: "pts",
    sortType: "A",
    startIndex: 0,
    endIndex: 50,
  });

  // Import raw data from api
  const skaterList = useFetch(
    `https://statsapi.web.nhl.com/api/v1/stats/leaders?expand=leaderPlayerFirstName,leaderPlayerLastName,leaderTeam&gameTypes=R&leaderCategories=${skaterTableSettings.sortParam}&limit=1000&season=${tableSettings.season}`
  );

  // Obtain array of skater id numbers for stat lookup
  const skaterData = usePlayerStats(
    skaterList
      ? skaterList.leagueLeaders[0].leaders
          .slice(skaterTableSettings.startIndex, skaterTableSettings.endIndex)
          .map((player) => {
            return {
              rank: player.rank,
              fullName: player.person.fullName,
              team: getTeamAbbreviation(player.team.name),
              id: player.person.id,
            };
          })
      : [],
    tableSettings.season
  );

  // Sort statistics based on table settings
  const sortedSkaterStats = useMemo(() => {
    if (skaterData === null) return;
    if (skaterTableSettings.sortType === "A") {
      return [...skaterData].sort((a, b) =>
        Sort.ascending(a, b, skaterTableSettings.sortParam)
      );
    } else {
      return [...skaterData].sort((a, b) =>
        Sort.descending(a["stats"], b["stats"], skaterTableSettings.sortParam)
      );
    }
  }, [skaterData, skaterTableSettings.sortParam, skaterTableSettings.sortType]);

  return (
    sortedSkaterStats && (
      <StyledTableContainer>
        <StyledPageTable>
          <SkaterTableHeader
            tableOptions={skaterTableSettings}
            setTableOptions={setSkaterTableSettings}
          />
          <TableBody>
            {sortedSkaterStats.map((skater) => (
              <SkaterTableRow
                skater={skater}
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
