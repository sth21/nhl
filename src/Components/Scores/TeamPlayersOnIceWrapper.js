import {
  StyledGoalieOnIceWrapper,
  StyledDefensemanOnIceWrapper,
  StyledForwardOnIceWrapper,
  StyledPlayerImgWrapper,
} from "../../StyledComponents/Scores/ScoresComponents";

// props.players && props.side
export default function TeamPlayersOnIceWrapper(props) {
  return (
    <>
      <StyledGoalieOnIceWrapper side={props.side}>
        {props.players.goalies.map((goalie) => (
          <StyledPlayerImgWrapper>
            <img
              src={`https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${goalie.person.id}.jpg`}
              alt="player headshot"
            />
          </StyledPlayerImgWrapper>
        ))}
      </StyledGoalieOnIceWrapper>
      <StyledDefensemanOnIceWrapper side={props.side}>
        {props.players.defenseman.map((dman) => (
          <StyledPlayerImgWrapper>
            <img
              src={`https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${dman.person.id}.jpg`}
              alt="player headshot"
            />
          </StyledPlayerImgWrapper>
        ))}
      </StyledDefensemanOnIceWrapper>
      <StyledForwardOnIceWrapper side={props.side}>
        {props.players.forwards.map((forward) => (
          <StyledPlayerImgWrapper>
            <img
              src={`https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${forward.person.id}.jpg`}
              alt="player headshot"
            />
          </StyledPlayerImgWrapper>
        ))}
      </StyledForwardOnIceWrapper>
    </>
  );
}
