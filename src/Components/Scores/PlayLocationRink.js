// props.plays
// props.homeTeamLogo

import rink from "./../../Media/rink.svg";
import {
  StyledCenterIceLogo,
  StyledRink,
  StyledRinkWrapper,
} from "../../StyledComponents/Scores/ScoresComponents";
import PlayLocationMarker from "./PlayLocationMarker";
import { useState, useRef, useEffect } from "react";
import uniqid from "uniqid";

export default function PlayLocationRink(props) {
  // Hooks
  const [rinkHeight, setRinkHeight] = useState(0);
  const [rinkWidth, setRinkWidth] = useState(0);
  const rinkRef = useRef();

  const plays = props.plays;

  // Handle changes to the rink height and width
  useEffect(() => {
    if (!rinkRef.current) return;
    const handleResize = () => {
      setRinkHeight(rinkRef.current.offsetHeight);
      setRinkWidth(rinkRef.current.offsetWidth);
    };

    const handleImgLoad = () => {
      handleResize();
      rinkRef.current.removeEventListener("load", handleImgLoad);
    };

    rinkRef.current.addEventListener("load", handleImgLoad);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [rinkRef]);

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
    <StyledRinkWrapper>
      <StyledRink src={rink} ref={rinkRef} />
      {props.homeTeamLogo ? (
        <StyledCenterIceLogo
          src={props.homeTeamLogo ? props.homeTeamLogo : "#"}
        />
      ) : (
        <></>
      )}
      {getMeaningfulPlaysWithCoordinates().map((play) => (
        <PlayLocationMarker
          key={uniqid()}
          play={play}
          containerWidth={rinkWidth}
          containerHeight={rinkHeight}
        />
      ))}
    </StyledRinkWrapper>
  );
}
