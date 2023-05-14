// props.logos
// props.games
// props.date
// props.setDate

import { Route, Routes } from "react-router-dom";
import {
  StyledGameFeedBigText,
  StyledGameFeedWrapper,
  StyledScoresSettingsWrapper,
} from "../../../StyledComponents/Scores/ScoresComponents";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import GameCenter from "../GameCenter/GameCenter";
import GameView from "./GameView";
import uniqid from "uniqid";
import moment from "moment";

export default function GameFeed(props) {
  function dateSelected(date) {
    props.setDate(moment(date).format("YYYY-MM-DD"));
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <StyledGameFeedWrapper>
            <StyledScoresSettingsWrapper>
              <StyledGameFeedBigText>
                {moment(props.date).format("LL")}
              </StyledGameFeedBigText>
              <DayPicker
                mode="single"
                selected={props.date}
                onSelect={dateSelected}
              />
            </StyledScoresSettingsWrapper>
            {props.games.map((game) => (
              <GameView
                gameId={game.gamePk}
                logos={props.logos}
                key={uniqid()}
              />
            ))}
          </StyledGameFeedWrapper>
        }
      />
      <Route path=":gameId" element={<GameCenter logos={props.logos} />} />
    </Routes>
  );
}
