import { FormControl, Select, MenuItem } from "@mui/material";
import uniqid from "uniqid";

export default function StandingsYearOptions(props) {
  const FIRSTYEAR = 1917;
  const CURRENTYEAR = props.currentYear;

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
    props.setStandingsOptions({
      type: "byLeague",
      year: parseInt(e.target.value, 10),
    });
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
