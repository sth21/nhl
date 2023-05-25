import { FormControl, Select, MenuItem } from "@mui/material";
import uniqid from "uniqid";

export default function StandingsYearOptions({ currentYear, setOptions }) {
  const FIRSTYEAR = 1917;
  const CURRENTYEAR = currentYear;

  function createMenuItems(firstYear, currentYear) {
    const menuItems = [];
    for (let i = CURRENTYEAR, j = 0; i >= FIRSTYEAR; i--, j++) {
      menuItems[j] = (
        <MenuItem
          value={i}
          key={uniqid()}
          style={{ fontFamily: "Sintony, sans-serif" }}
        >
          {i}-{i + 1}
        </MenuItem>
      );
    }
    return menuItems;
  }

  function handleChange(e) {
    setOptions((prevOptions) => {
      return {
        ...prevOptions,
        year: parseInt(e.target.value, 10),
      };
    });
  }

  return (
    <FormControl variant="standard" style={{ padding: "1em" }}>
      <Select
        onChange={handleChange}
        defaultValue={CURRENTYEAR}
        autowidth="true"
        style={{ fontSize: "1.25rem", fontFamily: "Sintony, sans-serif" }}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          PaperProps: {
            style: {
              maxHeight: "175px",
            },
          },
        }}
      >
        {createMenuItems(FIRSTYEAR, CURRENTYEAR)}
      </Select>
    </FormControl>
  );
}
