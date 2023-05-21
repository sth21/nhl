import { StyledPageTableHead } from "../../StyledComponents/General/GeneralComponents";
import SortableHeader from "./SortableHeader";
import UnSortableHeader from "./UnSortableHeader";
import { TableHead } from "@mui/material";

export default function SkaterTableHeader({ tableOptions, setTableOptions }) {
  return (
    <TableHead>
      <StyledPageTableHead>
        <UnSortableHeader text="Rank" />
        <UnSortableHeader text="Player" />
        <UnSortableHeader text="Season" />
        <UnSortableHeader text="Team" />
        <UnSortableHeader text="GP" />
        <SortableHeader
          text="G"
          accessCode="goals"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="A"
          accessCode="assists"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="P"
          accessCode="points"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="+/-"
          accessCode="plusMinus"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <UnSortableHeader text="PIM" />
        <SortableHeader
          text="PPG"
          accessCode="powerPlayGoals"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="PPP"
          accessCode="powerPlayPoints"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="SHG"
          accessCode="shortHandedGoals"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="SHP"
          accessCode="shortHandedPoints"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <UnSortableHeader text="OTG" />
        <SortableHeader
          text="GWG"
          accessCode="gameWinningGoals"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <SortableHeader
          text="S"
          accessCode="shots"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
        <UnSortableHeader text="S%" />
        <UnSortableHeader text="TOI/GP" />
        <SortableHeader
          text="FOW"
          accessCode="faceOffPct"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
      </StyledPageTableHead>
    </TableHead>
  );
}
