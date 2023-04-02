import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import uniqid from "uniqid";

export default function StandingsYearOptions(props) {
  const FIRSTYEAR = 1917;
  const CURRENTYEAR =
    new Date().getMonth() >= 10
      ? new Date().getFullYear()
      : new Date().getFullYear() - 1;

  function createMenuItems(firstYear, currentYear) {
    const menuItems = [];
    for (let i = CURRENTYEAR, j = 0; i >= FIRSTYEAR; i--, j++) {
      menuItems[j] = (
        <MenuItem value={i} key={uniqid()}>
          {i}-{i + 1}
        </MenuItem>
      );
    }
    return menuItems;
  }

  function handleChange(e) {
    props.setYear(parseInt(e.target.value, 10));
  }

  return (
    <FormControl variant="standard" style={{ padding: "1em" }}>
      <Select
        onChange={handleChange}
        defaultValue={CURRENTYEAR}
        autowidth="true"
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
