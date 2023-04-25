import { useState, useRef, useEffect } from "react";
import {
  StyledRinkWrapper,
  StyledRink,
} from "./../../../../StyledComponents/Scores/ScoresComponents";
import rink from "./../../../../Media/rink.svg";
import PlayersOnIceWidget from "./PlayersOnIceWidget";
import PlayLocationWrapper from "./PlayLocationWrapper";
import {
  StyledOption,
  StyledOptionContainer,
} from "../../../../StyledComponents/General/GeneralComponents";

// props.logos, props.scores

export default function RinkWidget(props) {
  const [activeMenu, setActiveMenu] = useState("players");
  const [rinkHeight, setRinkHeight] = useState(0);
  const [rinkWidth, setRinkWidth] = useState(0);
  const rinkRef = useRef();

  // Handle changes to the rink height and width
  useEffect(() => {
    if (!rinkRef.current) return;
    const handleResize = () => {
      setRinkHeight(rinkRef.current.offsetHeight);
      setRinkWidth(rinkRef.current.offsetWidth);
    };

    const handleImgLoad = () => {
      handleResize();
      rinkRef.current.removeEventListener("load", handleImgLoad);
    };

    rinkRef.current.addEventListener("load", handleImgLoad);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [rinkRef]);

  return activeMenu ? (
    <>
      <StyledRinkWrapper>
        <StyledRink src={rink} ref={rinkRef} alt="rink" />
        {activeMenu === "players" ? (
          <PlayersOnIceWidget
            liveData={props.scores.liveData}
            logos={props.logos}
            rinkWidth={rinkWidth}
          />
        ) : (
          <PlayLocationWrapper
            rinkHeight={rinkHeight}
            rinkWidth={rinkWidth}
            plays={props.scores.liveData.plays.allPlays}
            homeTeamLogo={props.logos[props.scores.gameData.teams.home.id]}
            logos={props.logos}
          />
        )}
      </StyledRinkWrapper>
      <StyledOptionContainer>
        <StyledOption
          onClick={() => setActiveMenu("players")}
          disabled={activeMenu === "players"}
        >
          Players
        </StyledOption>
        <StyledOption
          onClick={() => setActiveMenu("plays")}
          disabled={activeMenu === "plays"}
        >
          Plays
        </StyledOption>
      </StyledOptionContainer>
    </>
  ) : (
    <></>
  );
}
