import {
  StyledGoalieOnIceWrapper,
  StyledDefensemanOnIceWrapper,
  StyledForwardOnIceWrapper,
  StyledPlayerImgWrapper,
  StyledPlayerLabel,
  StyledToolTip,
  StyledToolTipWrapper,
} from "../../StyledComponents/Scores/ScoresComponents";
import uniqid from "uniqid";
import getTeamColor from "./../../Utils/getTeamColor";

// props.players && props.side
export default function TeamPlayersOnIceWrapper(props) {
  function PlayerWrapper(props) {
    return (
      <StyledToolTip
        title={
          <StyledToolTipWrapper>
            <div style={{ fontWeight: "bold" }}>
              <img src={props.logo} alt="team logo" />
              <p>{`${props.player.person.fullName} (${props.player.position.abbreviation})`}</p>
            </div>
            {props.player.position.abbreviation === "G" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: ".5em",
                }}
              >
                <p>Saves: {props.player.stats.goalieStats.saves}</p>
                <p>
                  Save Percentage:{" "}
                  {Math.trunc(
                    props.player.stats.goalieStats.savePercentage * 10
                  ) / 1000}
                </p>
                <p>
                  Goals Against:{" "}
                  {props.player.stats.goalieStats.shots -
                    props.player.stats.goalieStats.saves}
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: ".5em",
                }}
              >
                <p>Time on Ice: {props.player.stats.skaterStats.timeOnIce}</p>
                <p>Goals: {props.player.stats.skaterStats.goals}</p>
                <p>Assists: {props.player.stats.skaterStats.goals}</p>
              </div>
            )}
          </StyledToolTipWrapper>
        }
        placement="top"
      >
        <StyledPlayerImgWrapper>
          <img
            src={`https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${props.player.person.id}.jpg`}
            alt="player headshot"
          />
          <StyledPlayerLabel color={getTeamColor(props.triCode)}>
            {props.player.person.fullName.split(" ").slice(-1)}
          </StyledPlayerLabel>
        </StyledPlayerImgWrapper>
      </StyledToolTip>
    );
  }

  return (
    <>
      <StyledGoalieOnIceWrapper side={props.teamInfo.side}>
        {props.players.goalies.map((goalie) => (
          <PlayerWrapper
            key={uniqid}
            player={goalie}
            triCode={props.teamInfo.triCode}
            logo={props.teamInfo.logo}
          />
        ))}
      </StyledGoalieOnIceWrapper>
      <StyledDefensemanOnIceWrapper side={props.teamInfo.side}>
        {props.players.defenseman.map((dman) => (
          <PlayerWrapper
            key={uniqid()}
            player={dman}
            triCode={props.teamInfo.triCode}
            logo={props.teamInfo.logo}
          />
        ))}
      </StyledDefensemanOnIceWrapper>
      <StyledForwardOnIceWrapper side={props.teamInfo.side}>
        {props.players.forwards.map((forward) => (
          <PlayerWrapper
            key={uniqid()}
            player={forward}
            triCode={props.teamInfo.triCode}
            logo={props.teamInfo.logo}
          />
        ))}
      </StyledForwardOnIceWrapper>
    </>
  );
}
