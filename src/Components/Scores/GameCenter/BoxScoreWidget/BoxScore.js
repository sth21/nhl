// props.logos
// props.liveData

import { Table, TableHead, TableRow, TableBody } from "@mui/material";
import {
  StyledTableContainer,
  StyledFlexCell,
  StyledTableHeader,
  StyledTableCell,
} from "../../../../StyledComponents/General/GeneralComponents";
import { StyledScoreboardWrapper } from "../../../../StyledComponents/Scores/ScoresComponents";
import { useMemo } from "react";
import uniqid from "uniqid";

export default function BoxScore(props) {
  const scoringByPeriod = useMemo(
    () =>
      getScoringData(
        props.liveData.plays,
        props.liveData.linescore.currentPeriod,
        props.liveData.boxscore.teams
      ),
    [props.liveData]
  );

  function getScoringData(playsInfo, numPeriods, teams) {
    return new Array(numPeriods).fill(0).map((val, periodNum) => {
      return playsInfo.scoringPlays
        .filter(
          (playNum) =>
            playNum > playsInfo.playsByPeriod[periodNum].startIndex &&
            playNum < playsInfo.playsByPeriod[periodNum].endIndex
        )
        .reduce(
          (acc, cur) => {
            if (playsInfo.allPlays[cur].team.name === teams.home.team.name)
              acc.home++;
            else acc.away++;
            return acc;
          },
          { home: 0, away: 0 }
        );
    });
  }

  function getPeriodOrdinal(period, isPlayoff, totalPeriods) {
    if (period === 0) {
      return "1st";
    } else if (period === 1) {
      return "2nd";
    } else if (period === 2) {
      return "3rd";
    } else if (isPlayoff) {
      return totalPeriods > 4 ? `OT ${totalPeriods - 4}` : "OT";
    } else if (period === 3) {
      return "OT";
    } else {
      return "SO";
    }
  }

  function renderPeriodCells(totalPeriods) {
    const periodCells = [];
    for (let i = 0; i < totalPeriods; i++) {
      periodCells[i] = (
        <StyledTableHeader key={uniqid()}>
          {getPeriodOrdinal(i, props.isPlayoff, totalPeriods)}
        </StyledTableHeader>
      );
    }
    return periodCells;
  }

  return (
    <StyledScoreboardWrapper>
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableHeader>{`${props.liveData.linescore.currentPeriodTimeRemaining} / ${props.liveData.linescore.currentPeriodOrdinal}`}</StyledTableHeader>
              {renderPeriodCells(props.liveData.linescore.currentPeriod)}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell>
                <StyledFlexCell>
                  <img
                    src={
                      props.logos[props.liveData.boxscore.teams.home.team.id]
                    }
                    alt="team logo"
                  />
                  <p>{props.liveData.boxscore.teams.home.team.abbreviation}</p>
                </StyledFlexCell>
              </StyledTableCell>
              {scoringByPeriod.map((period) => (
                <StyledTableCell key={uniqid()}>{period.home}</StyledTableCell>
              ))}
            </TableRow>
            <TableRow>
              <StyledTableCell>
                <StyledFlexCell>
                  <img
                    src={
                      props.logos[props.liveData.boxscore.teams.away.team.id]
                    }
                    alt="team logo"
                  />
                  <p>{props.liveData.boxscore.teams.away.team.abbreviation}</p>
                </StyledFlexCell>
              </StyledTableCell>
              {scoringByPeriod.map((period) => (
                <StyledTableCell key={uniqid()}>{period.away}</StyledTableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </StyledTableContainer>
    </StyledScoreboardWrapper>
  );
}
