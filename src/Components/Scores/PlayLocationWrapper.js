// props.plays
// props.homeTeamLogo
// props.rinkHeight
// props.rinkWidth

import { StyledCenterIceLogo } from "../../StyledComponents/Scores/ScoresComponents";
import PlayLocationMarker from "./PlayLocationMarker";
import uniqid from "uniqid";

export default function PlayLocationWrapper(props) {
  const plays = props.plays;

  function isMeaningfulEvent(e) {
    return (
      e === "SHOT" ||
      e === "GOAL" ||
      e === "HIT" ||
      e === "BLOCKED_SHOT" ||
      e === "PENALTY"
    );
  }

  // Filter for key plays with coordinates
  function getMeaningfulPlaysWithCoordinates() {
    return plays.filter(
      (play) =>
        Object.keys(play.coordinates).length !== 0 &&
        isMeaningfulEvent(play.result.eventTypeId)
    );
  }

  return (
    <>
      <StyledCenterIceLogo
        src={props.homeTeamLogo ? props.homeTeamLogo : "#"}
      />
      {getMeaningfulPlaysWithCoordinates().map((play) => (
        <PlayLocationMarker
          logos={props.logos}
          key={uniqid()}
          play={play}
          containerWidth={props.rinkWidth}
          containerHeight={props.rinkHeight}
        />
      ))}
    </>
  );
}
