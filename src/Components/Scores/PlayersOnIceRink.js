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
import TeamPlayersOnIceWrapper from "./TeamPlayersOnIceWrapper";
import {
  StyledRinkWrapper,
  StyledRink,
  StyledSideIceLogo,
} from "../../StyledComponents/Scores/ScoresComponents";

// https://cms.nhl.bamgrid.com/images/headshots/current/168x168/{goalie.person.id}.jpg

export default function PlayersOnIceRink(props) {
  return (
    <StyledRinkWrapper>
      <StyledRink src={rink} />
      <StyledSideIceLogo src={props.homeInfo.logo} alt="home team logo" />
      <StyledSideIceLogo src={props.awayInfo.logo} alt="away team logo" />
      <TeamPlayersOnIceWrapper
        players={props.homePlayers}
        side={props.homeInfo.side}
      />
      <TeamPlayersOnIceWrapper
        players={props.awayPlayers}
        side={props.awayInfo.side}
      />
    </StyledRinkWrapper>
  );
}
