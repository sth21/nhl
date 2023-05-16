import { StyledPageTableHead } from "../../StyledComponents/General/GeneralComponents";
import SortableHeader from "./SortableHeader";
import UnSortableHeader from "./UnSortableHeader";
import { TableHead } from "@mui/material";

export default function TeamTableSortableHeader({
  tableOptions,
  setTableOptions,
}) {
  return (
    <TableHead>
      <StyledPageTableHead>
        <UnSortableHeader text="Rank" />
        <UnSortableHeader text="Team" />
        <UnSortableHeader text="Season" />
        <SortableHeader
          text="GP"
          accessCode="gamesPlayed"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="W"
          accessCode="wins"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="L"
          accessCode="losses"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="P"
          accessCode="pts"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="P%"
          accessCode="ptPctg"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="GF/GP"
          accessCode="goalsPerGame"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="GA/GP"
          accessCode="goalsAgainstPerGame"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="PP%"
          accessCode="powerPlayPercentage"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="PK%"
          accessCode="penaltyKillPercentage"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="Shots/GP"
          accessCode="shotsPerGame"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="SA/GP"
          accessCode="shotsAllowed"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="S%"
          accessCode="shootingPercentage"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="FOW%"
          accessCode="faceOffWinPercentage"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
      </StyledPageTableHead>
    </TableHead>
  );
}
