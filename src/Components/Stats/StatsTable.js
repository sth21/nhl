import { Table, TableBody } from "@mui/material";
import SkaterTableHeader from "./SkaterTableHeader";
import GoalieTableHeader from "./GoalieTableHeader";

import TeamTableHeader from "./TeamTableHeader";
import TeamTableRow from "./TeamTableRow";

import uniqid from "uniqid";

export default function StatsTable({
  teamStats,
  tableOptions,
  setTableOptions,
}) {
  console.log(teamStats);
  return (
    <Table>
      {tableOptions.type === "skater" ? (
        <>
          <SkaterTableHeader />
        </>
      ) : tableOptions.type === "goalie" ? (
        <>
          <GoalieTableHeader />
        </>
      ) : (
        <>
          <TeamTableHeader
            tableOptions={tableOptions}
            setTableOptions={setTableOptions}
          />
          <TableBody>
            {teamStats.map((team, index) => (
              <TeamTableRow
                team={team}
                index={index + 1}
                year={tableOptions.year}
                key={uniqid()}
              />
            ))}
          </TableBody>
        </>
      )}
    </Table>
  );
}
