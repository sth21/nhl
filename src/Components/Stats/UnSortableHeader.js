import { StyledTableHeader } from "../../StyledComponents/General/GeneralComponents";

export default function UnSortableHeader({ text }) {
  return (
    <StyledTableHeader>
      <p>{text}</p>
    </StyledTableHeader>
  );
}
