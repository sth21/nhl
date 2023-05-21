import {
  StyledTableHeader,
  StyledFlexCell,
  StyledSmallIcon,
} from "../../StyledComponents/General/GeneralComponents";
import upArrow from "./../../Media/up-arrow-white.png";
import downArrow from "./../../Media/down-arrow-white.png";

export default function SortableHeader({
  text,
  accessCode,
  tableOptions,
  setTableOptions,
}) {
  function arrowSelector() {
    return tableOptions.sortType === "A" ? downArrow : upArrow;
  }

  return (
    <StyledTableHeader
      onClick={() =>
        setTableOptions((prevOptions) => ({
          ...prevOptions,
          sortParam: accessCode,
          sortType:
            prevOptions.sortParam !== accessCode
              ? "D"
              : prevOptions.sortType === "D"
              ? "A"
              : "D",
        }))
      }
    >
      <StyledFlexCell>
        <p>{text}</p>
        {tableOptions.sortParam === accessCode ? (
          <StyledSmallIcon src={arrowSelector()} alt="arrow" />
        ) : (
          <></>
        )}
      </StyledFlexCell>
    </StyledTableHeader>
  );
}
