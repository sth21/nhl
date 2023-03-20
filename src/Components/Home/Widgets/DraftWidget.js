import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import {
  StyledHeader,
  StyledTableCell,
  StyledTableHeader,
  StyledTableContainer,
} from "../../../StyledComponents/Home/WidgetComponents";

import uniqid from "uniqid";

export default function DraftWidget(props) {
  const firstPickOdds = [
    "18.5%",
    "13.5%",
    "11.5%",
    "9.5%",
    "8.5%",
    "7.5%",
    "6.5%",
    "6.0%",
    "5.0%",
    "3.5%",
    "3.0%",
  ];

  const teams = [...props.teams.slice(21)].reverse();

  return (
    <div>
      <StyledHeader>Lottery Odds</StyledHeader>
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableHeader>Rank</StyledTableHeader>
              <StyledTableHeader>Team</StyledTableHeader>
              <StyledTableHeader>Odds</StyledTableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {teams.map((team, index) => (
              <TableRow key={uniqid()}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell>
                  <img
                    src={
                      props.logos
                        ? props.logos[parseInt(team.team.id, 10)]
                        : "#"
                    }
                    alt="Team"
                  ></img>
                </StyledTableCell>
                <StyledTableCell>{firstPickOdds[index]}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </div>
  );
}
