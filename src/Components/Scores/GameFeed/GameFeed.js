import { Route, Routes } from "react-router-dom";
import GameCenter from "../GameCenter/GameCenter";
import GameView from "./GameView";
import useLogos from "./../../../Utils/useLogos";
import uniqid from "uniqid";

export default function GameFeed(props) {
  const logos = useLogos("nhl");

  console.log(props);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {props.games.map((game) => (
                <GameView gameId={game.gamePk} logos={logos} key={uniqid()} />
              ))}
            </>
          }
        />
        <Route path=":gameId" element={<GameCenter logos={props.logos} />} />
      </Routes>
    </div>
  );
}
