// props.play
// props.logo

import NHL_LOGO from "./../../../../Media/nhl.svg";

export default function Play(props) {
  return (
    <div>
      <img src={NHL_LOGO} alt="team logo" />
      {props.play.team ? <p>{props.play.team.triCode}</p> : <></>}
      <p>{props.play.result.description}</p>
      <p>{props.play.about.periodTimeRemaining}</p>
    </div>
  );
}
