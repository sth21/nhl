import { useState } from "react";
import Play from "./Play";
import {
  StyledOption,
  StyledStickyOptionContainer,
} from "../../../../StyledComponents/General/GeneralComponents";
import uniqid from "uniqid";

// props.liveData
// props.isPlayoff
// props.logos

export default function PlayFeed(props) {
  const [activePeriod, setActivePeriod] = useState(
    props.liveData.linescore.currentPeriod
  );

  const currentPeriod = props.liveData.linescore.currentPeriod;
  const plays = props.liveData.plays;

  // find period start by searching for first faceoff after startIndex
  function getPeriodStartIndex(plays, period, playsByPeriod) {
    const startIndex = playsByPeriod[period].startIndex;
    for (let i = startIndex; i < plays.allPlays.length; i++) {
      if (plays.allPlays[i].result.eventTypeId === "FACEOFF") return i;
    }
    return 0;
  }

  // create period toggle buttons up to current period
  // ex: if period 2 currently, only give period 1 and 2 buttons
  function createPeriodOptions() {
    let buttons = [];
    for (let i = 1; i <= currentPeriod; i++) {
      buttons[buttons.length] = <PeriodOptions period={i} key={uniqid()} />;
    }
    return buttons;
  }

  function PeriodOptions(props) {
    function periodGeneralizer(period) {
      if (period === 1) return "1st";
      if (period === 2) return "2nd";
      if (period === 3) return "3rd";
      if (period === 4 || props.isPlayoff) return "OT";
      return "SO";
    }

    return (
      <StyledOption
        disabled={props.period === activePeriod}
        onClick={() => setActivePeriod(props.period)}
      >
        {periodGeneralizer(props.period)}
      </StyledOption>
    );
  }

  return (
    <>
      <StyledStickyOptionContainer>
        {createPeriodOptions(activePeriod)}
      </StyledStickyOptionContainer>
      {plays.allPlays
        .slice(
          getPeriodStartIndex(plays, activePeriod - 1, plays.playsByPeriod),
          plays.playsByPeriod[activePeriod - 1].endIndex
        )
        .reverse()
        .map((play) => (
          <Play
            key={uniqid()}
            play={play}
            logo={play.team ? props.logos[play.team.id] : null}
          />
        ))}
    </>
  );
}
