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

import TeamPlayersOnIceWrapper from "./TeamPlayersOnIceWrapper";
import {
  StyledSideIceLogo,
  StyledSideIceLogoWrapper,
} from "../../StyledComponents/Scores/ScoresComponents";

export default function PlayersOnIceRink(props) {
  return (
    <>
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
    </>
  );
}
