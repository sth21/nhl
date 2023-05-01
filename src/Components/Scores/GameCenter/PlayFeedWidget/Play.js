// props.play
// props.logo

import {
  StyledFeedPlayerLabel,
  StyledFeedPlayerWrapper,
  StyledPlayerImgWrapper,
  StyledPlayMainLabel,
  StyledPlaySideLabel,
  StyledPlayWrapper,
} from "../../../../StyledComponents/Scores/ScoresComponents";
import NHL_LOGO from "./../../../../Media/nhl.svg";

export default function Play(props) {
  return (
    <StyledPlayWrapper>
      <StyledPlaySideLabel>
        <p>{props.play.about.periodTimeRemaining}</p>
        <p>{props.play.result.event.toUpperCase()}</p>
      </StyledPlaySideLabel>
      <StyledPlayMainLabel>
        <div>
          <img src={props.logo ? props.logo : NHL_LOGO} alt="team logo" />
          {props.play.team ? (
            <p style={{ fontWeight: "bold" }}>{props.play.team.triCode}</p>
          ) : (
            <></>
          )}
        </div>
        <div>
          <p>{props.play.result.description}</p>
        </div>
        {props.play.players ? (
          <div>
            {props.play.players.map((player) => (
              <StyledFeedPlayerWrapper>
                <StyledPlayerImgWrapper>
                  <img
                    src={`https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${player.player.id}.jpg`}
                    alt="player icon"
                  />
                </StyledPlayerImgWrapper>
                <StyledFeedPlayerLabel>
                  {player.player.fullName.split(" ").slice(1)}
                </StyledFeedPlayerLabel>
              </StyledFeedPlayerWrapper>
            ))}
          </div>
        ) : (
          <></>
        )}
      </StyledPlayMainLabel>
    </StyledPlayWrapper>
  );
}
