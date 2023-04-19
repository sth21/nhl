/* 
props.homePlayers
            .forwards
            .defenseman
            .goalies

props.awayPlayers
            .forwards
            .defenseman
            .goalies

props.homeInfo
            .logo
            .side
props.awaySide
            .logo
            .side

*/

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
