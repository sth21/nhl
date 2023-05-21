import { useState, useEffect } from "react";
import useFetch from "../../Utils/useFetch";
import usePlayerStats from "../../Utils/usePlayerStats";
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
    sortParam: "points",
    sortType: "D",
    startIndex: 0,
    endIndex: 25,
  });

  // Import raw data from api
  const skaterList = useFetch(
    `https://statsapi.web.nhl.com/api/v1/stats/leaders?expand=leaderPlayerFirstName,leaderPlayerLastName,leaderTeam&gameTypes=R&leaderCategories=${skaterTableSettings.sortParam}&limit=1000&season=${tableSettings.season}`
  );

  // Obtain array of skater id numbers for stat lookup
  const skaterData = usePlayerStats(
    skaterList,
    skaterTableSettings,
    tableSettings.season
  );

  useEffect(() => {
    if (skaterList === null) return;
    if (skaterTableSettings.sortType === "A") {
      setSkaterTableSettings((prevSettings) => {
        return {
          ...prevSettings,
          startIndex: skaterList.leagueLeaders[0].leaders.length - 50,
          endIndex: skaterList.leagueLeaders[0].leaders.length,
        };
      });
    } else {
      setSkaterTableSettings((prevSettings) => {
        return {
          ...prevSettings,
          startIndex: 0,
          endIndex: 50,
        };
      });
    }
  }, [skaterTableSettings.sortType, skaterList]);

  return skaterData && skaterData.length > 0 ? (
    <StyledTableContainer>
      <StyledPageTable>
        <SkaterTableHeader
          tableOptions={skaterTableSettings}
          setTableOptions={setSkaterTableSettings}
        />
        <TableBody>
          {skaterData.map((skater) => (
            <SkaterTableRow
              skater={skater}
              year={tableSettings.season}
              key={uniqid()}
            />
          ))}
        </TableBody>
      </StyledPageTable>
    </StyledTableContainer>
  ) : (
    <></>
  );
}
