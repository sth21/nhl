import { useState } from "react";
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
import GoalieTableRow from "./GoalieTableRow";
import GoalieTableHeader from "./GoalieTableHeader";
import PlayerPageManager from "./PlayerPageManager";

export default function PlayerTable({ tableSettings, defaultParam }) {
  // Define player table settings
  const [playerTableSettings, setPlayerTableSettings] = useState({
    sortParam: defaultParam,
    sortType: "D",
    startIndex: 0,
    endIndex: 0,
  });

  // Import raw data from api
  const playerList = useFetch(
    `https://statsapi.web.nhl.com/api/v1/stats/leaders?expand=leaderPlayerFirstName,leaderPlayerLastName,leaderTeam&gameTypes=R&leaderCategories=${playerTableSettings.sortParam}&limit=1000&season=${tableSettings.season}`
  );

  // Obtain array of player id numbers for stat lookup
  const playerData = usePlayerStats(
    playerList,
    playerTableSettings,
    tableSettings.season
  );

  return (
    <>
      <PlayerPageManager
        tableSettings={playerTableSettings}
        setTableSettings={setPlayerTableSettings}
        displayType={tableSettings.type + "s"}
        playersAvailable={
          playerList &&
          playerList.leagueLeaders.length !== 0 &&
          playerList.leagueLeaders[0].leaders
            ? playerList.leagueLeaders[0].leaders.length
            : -1
        }
      />
      {playerData && playerData.length > 0 ? (
        <StyledTableContainer>
          <StyledPageTable>
            {tableSettings.type === "Skater" ? (
              <SkaterTableHeader
                tableOptions={playerTableSettings}
                setTableOptions={setPlayerTableSettings}
              />
            ) : (
              <GoalieTableHeader
                tableOptions={playerTableSettings}
                setTableOptions={setPlayerTableSettings}
              />
            )}
            <TableBody>
              {tableSettings.type === "Skater"
                ? playerData.map((player) => (
                    <SkaterTableRow
                      skater={player}
                      year={tableSettings.season}
                      key={uniqid()}
                    />
                  ))
                : playerData.map((player) => (
                    <GoalieTableRow
                      goalie={player}
                      year={tableSettings.season}
                      key={uniqid()}
                    />
                  ))}
            </TableBody>
          </StyledPageTable>
        </StyledTableContainer>
      ) : (
        <></>
      )}
    </>
  );
}
