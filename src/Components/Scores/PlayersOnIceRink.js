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
            .triCode
props.awaySide
            .logo
            .side
            .triCode

*/

import rink from "./../../Media/rink.svg";
import TeamPlayersOnIceWrapper from "./TeamPlayersOnIceWrapper";
import {
  StyledRinkWrapper,
  StyledRink,
  StyledSideIceLogo,
  StyledSideIceLogoWrapper,
} from "../../StyledComponents/Scores/ScoresComponents";

// https://cms.nhl.bamgrid.com/images/headshots/current/168x168/{goalie.person.id}.jpg

export default function PlayersOnIceRink(props) {
  console.log(props.homePlayers);
  console.log(props.awayPlayers);

  return (
    <StyledRinkWrapper>
      <StyledRink src={rink} />
      <StyledSideIceLogoWrapper>
        <StyledSideIceLogo
          src={props.homeInfo.logo}
          alt="home team logo"
          side={props.homeInfo.side}
        />
        <StyledSideIceLogo
          src={props.awayInfo.logo}
          alt="away team logo"
          side={props.awayInfo.side}
        />
      </StyledSideIceLogoWrapper>
      <TeamPlayersOnIceWrapper
        players={props.homePlayers}
        teamInfo={props.homeInfo}
      />
      <TeamPlayersOnIceWrapper
        players={props.awayPlayers}
        teamInfo={props.awayInfo}
      />
    </StyledRinkWrapper>
  );
}
