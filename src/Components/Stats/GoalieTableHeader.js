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
        <UnSortableHeader text="GS" />
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
        <UnSortableHeader text="SA" />
        <UnSortableHeader text="SVS" />
        <UnSortableHeader text="GA" />
        <UnSortableHeader text="SV%" />
        <UnSortableHeader text="GAA" />
        <UnSortableHeader text="TOI" />
        <SortableHeader
          text="SO"
          accessCode="shutouts"
          tableOptions={tableOptions}
          setTableOptions={setTableOptions}
        />
      </StyledPageTableHead>
    </TableHead>
  );
}
