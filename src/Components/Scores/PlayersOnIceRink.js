// NEED TO MAKE ON TUESDAY WHEN THE CAR / NYI GAME IS ACTIVE!!!!!!

import rink from "./../../Media/rink.svg";
import {
  StyledRinkWrapper,
  StyledRink,
} from "../../StyledComponents/Scores/ScoresComponents";

export default function PlayersOnIceRink(props) {
  return (
    <StyledRinkWrapper>
      <StyledRink src={rink} />
    </StyledRinkWrapper>
  );
}
