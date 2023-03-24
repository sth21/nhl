import {
  StyledDraftTableCell,
  StyledMovementWrapper,
  StyledMovementIcon,
  StyledMovementLabel,
} from "../../StyledComponents/Draft/DraftComponents";
import { StyledFlexCell } from "./../../StyledComponents/General/GeneralComponents";
import { TableRow } from "@mui/material";
import downArrow from "./../../Media/down-arrow.png";
import upArrow from "./../../Media/up-arrow.png";
import tradedArrow from "./../../Media/trade.png";
import lock from "./../../Media/lock.png";
import uniqid from "uniqid";
import "balloon-css";
import getTeamAbbreviation from "./../../Utils/getTeamAbbreviation";

export default function LotteryTable(props) {
  function getTeamIndex(teamName) {
    return props.simDraftOrder.findIndex(
      (team) => getTeamAbbreviation(team.name) === teamName
    );
  }

  function threeWayTradeResult(tradedTo) {
    let index = 1;
    if (
      getTeamIndex(tradedTo.condition[0]) > getTeamIndex(tradedTo.condition[1])
    ) {
      index = 0;
    }
    return tradedTo.tradedTo[index];
  }

  return props.teams.map((team, index) => {
    if (team.tradedTo && team.tradedTo.condition)
      team.tradedTo = threeWayTradeResult(team.tradedTo);

    return (
      <TableRow key={uniqid()}>
        <StyledDraftTableCell style={{ minWidth: "60px" }}>
          <StyledFlexCell>
            <p>{index + props.startingIndex}</p>
            {team.positionShift !== 0 && team.positionShift ? (
              <StyledMovementWrapper>
                <StyledMovementIcon
                  src={team.positionShift > 0 ? upArrow : downArrow}
                />
                <StyledMovementLabel movement={team.positionShift}>
                  {Math.abs(team.positionShift)}
                </StyledMovementLabel>
              </StyledMovementWrapper>
            ) : (
              <></>
            )}
          </StyledFlexCell>
        </StyledDraftTableCell>
        <StyledDraftTableCell>
          <StyledFlexCell>
            <img
              src={props.logos ? props.logos[parseInt(team.id, 10)] : "#"}
              alt="team logo"
            ></img>
            <p>{team.name}</p>
            {team.tradedTo &&
            team.tradedTo.name !== getTeamAbbreviation(team.name) ? (
              team.tradedTo.protection <= index + props.startingIndex ||
              props.isDefault ? (
                <StyledMovementWrapper
                  data-balloon-length="medium"
                  data-balloon-pos="up"
                  aria-label={`This pick was traded to ${team.tradedTo.name} on ${team.tradedTo.date}`}
                >
                  <StyledMovementIcon src={tradedArrow} />
                  <StyledMovementLabel>
                    {team.tradedTo.name}
                  </StyledMovementLabel>
                </StyledMovementWrapper>
              ) : (
                <StyledMovementWrapper
                  data-balloon-length="medium"
                  data-balloon-pos="up"
                  aria-label={`This pick was not traded to ${team.tradedTo.name} as it is top-${team.tradedTo.protection} protected`}
                >
                  <StyledMovementIcon src={lock} />
                </StyledMovementWrapper>
              )
            ) : (
              <></>
            )}
          </StyledFlexCell>
        </StyledDraftTableCell>
        <StyledDraftTableCell>{team.record}</StyledDraftTableCell>
        <StyledDraftTableCell>{team.points}</StyledDraftTableCell>
        <StyledDraftTableCell>{team.streak}</StyledDraftTableCell>
        <StyledDraftTableCell>
          {team.odds === 0 ? "" : (team.odds * 100).toFixed(2) + "%"}
        </StyledDraftTableCell>
      </TableRow>
    );
  });
}
