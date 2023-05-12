import uniqid from "uniqid";
import { Link, Route, Routes } from "react-router-dom";
import GameCenter from "../GameCenter/GameCenter";

export default function GameFeed(props) {
  function GameView({ game }) {
    return (
      <Link to={`/scores/${game.gamePk}`}>
        <p>{game.teams.home.team.name}</p>
        <p>{game.teams.away.team.name}</p>
      </Link>
    );
  }

  console.log(props.games);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {props.games.map((game) => (
                <GameView key={uniqid()} game={game} />
              ))}
            </>
          }
        />
        <Route path=":gameId" element={<GameCenter logos={props.logos} />} />
      </Routes>
    </div>
  );
}
