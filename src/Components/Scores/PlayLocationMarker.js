// props.play
// props.containerHeight
// props.containerWidth
// props.logos

import shotIcon from "./../../Media/shot.png";
import goalIcon from "./../../Media/goal.png";
import hitIcon from "./../../Media/hit.png";
import blockIcon from "./../../Media/block.png";
import penaltyIcon from "./../../Media/penalty.png";
import {
  StyledPlayPNG,
  StyledToolTipWrapper,
  StyledToolTip,
} from "../../StyledComponents/Scores/ScoresComponents";
import getTeamColor from "./../../Utils/getTeamColor";

export default function PlayLocationMarker(props) {
  const play = props.play;
  const Y_INIT = 44.5;
  const X_INIT = 102;

  // to be used for the top attribute on the svg
  function getVerticalPosition() {
    return (
      (Y_INIT - play.coordinates.y) * (props.containerHeight / (Y_INIT * 2)) +
      "px"
    );
  }

  // to be used for the right attribute on the svg
  function getHorizontalPosition() {
    return (
      (X_INIT - play.coordinates.x) * (props.containerWidth / (X_INIT * 2)) +
      "px"
    );
  }

  // select the correct svg icon
  function iconGeneralizer() {
    if (play.result.eventTypeId === "SHOT") return shotIcon;
    else if (play.result.eventTypeId === "HIT") return hitIcon;
    else if (play.result.eventTypeId === "BLOCKED_SHOT") return blockIcon;
    else if (play.result.eventTypeId === "GOAL") return goalIcon;
    else if (play.result.eventTypeId === "PENALTY") return penaltyIcon;
    else return "#";
  }

  return (
    <StyledToolTip
      title={
        <StyledToolTipWrapper>
          <div>
            <img src="#" alt="#" />
            <p>
              {play.about.periodTimeRemaining} - {play.about.ordinalNum}
            </p>
          </div>
          <div>{play.result.description}</div>
        </StyledToolTipWrapper>
      }
      placement="top"
    >
      <StyledPlayPNG
        src={iconGeneralizer()}
        top={getVerticalPosition()}
        right={getHorizontalPosition()}
        color={getTeamColor(play.team.triCode)}
      />
    </StyledToolTip>
  );
}
