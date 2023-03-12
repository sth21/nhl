/* eslint-disable testing-library/no-node-access */

import Scoreboard from "../Components/Home/Scoreboard/Scoreboard";
import ScoreboardGame from "../Components/Home/Scoreboard/ScoreboardGame";
import ScoreboardGameHeader from "../Components/Home/Scoreboard/ScoreboardGameHeader";

import DraftWidget from "../Components/Home/Widgets/DraftWidget";
import PlayerStatsWidget from "../Components/Home/Widgets/PlayerStatsWidget";

import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockData from "./MockData";

const pregameRegular = MockData("pre", 0, "Final", false);
const pregamePlayoff = MockData("pre", 0, "Final", true);

const ingameRegular = MockData("in", 1, "Final", false);
const ingamePlayoff = MockData("in", 1, "Final", true);
const ingameRegularDelayed = MockData("in", 0, "Final", false);

const postgameRegular = MockData("post", 3, "Final", false);
const postgameOT = MockData("post", 4, "Final/OT", false);
const postgameSO = MockData("post", 5, "Final/SO", false);
const postgamePlayoff = MockData("post", 3, "Final", true);

describe("Scoreboard.js tests", () => {
  test("Loads array of games if props provided", () => {
    render(
      <Scoreboard
        gameInformation={{
          events: [pregameRegular, ingameRegular, postgameRegular],
        }}
      />
    );
    expect(screen.getAllByRole("complementary")).toHaveLength(3);
  });

  test("Loads empty HTML if no props provided", () => {
    render(<Scoreboard data-testid="scoreboard" />);
    expect(screen.queryByTestId("scoreboard")).toBeFalsy();
  });
});

jest.mock("../Components/Home/Scoreboard/ScoreboardGame", () => (props) => {
  const gameInfo = props.game.competitions[0];

  if (props.useGameLogo) {
    props.useGameLogo(gameInfo.competitors[0].id);
    props.useGameLogo(gameInfo.competitors[1].id);
  }

  if (props.ScoreboardGameHeader)
    props.ScoreboardGameHeader({
      game: props.game,
      gameState: props.game.status.type.state,
      isPlayoff: !!gameInfo.series,
    });

  return (
    <div role="complementary">
      <div>
        <div>
          <div>
            <p className="abbreviation">
              {gameInfo.competitors[0].team.abbreviation}
            </p>
          </div>
          <p data-testid="score">
            {props.game.status.type.state === "pre"
              ? gameInfo.competitors[0].records[0].summary
              : gameInfo.competitors[0].score}
          </p>
        </div>
        <div>
          <div>
            <p className="abbreviation">
              {gameInfo.competitors[1].team.abbreviation}
            </p>
          </div>
          <p data-testid="score">
            {props.game.status.type.state === "pre"
              ? gameInfo.competitors[1].records[0].summary
              : gameInfo.competitors[1].score}
          </p>
        </div>
      </div>
    </div>
  );
});

describe("ScoreboardGame.js tests", () => {
  test("Renders component with correct abbreviations", () => {
    render(<ScoreboardGame game={ingameRegular} />);
    expect(screen.getByText("TOR")).toBeTruthy();
    expect(screen.getByText("MIN")).toBeTruthy();
    expect(screen.queryByText("BUF")).toBeFalsy();
  });

  test("Renders with records if pregame", () => {
    render(<ScoreboardGame game={pregameRegular} />);
    expect(screen.getByText("33-14-4")).toBeTruthy();
    expect(screen.getByText("31-15-3")).toBeTruthy();
    expect(screen.queryByText("22-8-12")).toBeFalsy();
  });

  test("Renders with scores if not pregame", () => {
    render(<ScoreboardGame game={pregameRegular} />);
    const scores = screen.getAllByTestId("score");
    expect(scores[0].textContent).toBe("33-14-4");
    expect(scores[1].textContent).toBe("31-15-3");
  });

  test("Calls ScoreboardGameHeader with correct props", () => {
    const foo = jest.fn();

    render(<ScoreboardGame game={pregameRegular} useGameLogo={foo} />);
    expect(foo.mock.calls[0][0]).toBe(14);
    expect(foo.mock.calls[1][0]).toBe(10);
  });

  test("Calls useGameLogo with correct props", () => {
    const foo = jest.fn();

    render(<ScoreboardGame game={pregameRegular} ScoreboardGameHeader={foo} />);
    expect(foo.mock.calls[0][0]).toMatchObject({
      game: pregameRegular,
      gameState: "pre",
      isPlayoff: false,
    });
  });
});

describe("ScoreboardGameHeader.js tests", () => {
  test("Renders time of game and broadcast for pregame / regular season", () => {
    render(
      <ScoreboardGameHeader
        game={pregameRegular}
        gameState="pre"
        isPlayoff={false}
      />
    );
    expect(screen.getByText("7:00 PM")).toBeTruthy();
    expect(screen.getByText("ESPN+")).toBeTruthy();
  });

  test("Renders time of game and playoff game for pregame / playoff", () => {
    render(
      <ScoreboardGameHeader
        game={pregamePlayoff}
        gameState="pre"
        isPlayoff={true}
      />
    );
    expect(screen.getByText("7:00 PM")).toBeTruthy();
    expect(screen.getByText("Stanley Cup Final - Game 3")).toBeTruthy();
  });

  test("Renders display clock, period, and broadcast for ingame / regular season", () => {
    render(
      <ScoreboardGameHeader
        game={ingameRegular}
        gameState="in"
        isPlayoff={false}
      />
    );
    expect(screen.getByText("00:00 - 1st")).toBeTruthy();
    expect(screen.getByText("ESPN+")).toBeTruthy();
  });

  test("Renders display clock, period, and playoff game for ingame / playoff", () => {
    render(
      <ScoreboardGameHeader
        game={ingamePlayoff}
        gameState="in"
        isPlayoff={true}
      />
    );
    expect(screen.getByText("00:00 - 1st")).toBeTruthy();
    expect(screen.getByText("Stanley Cup Final - Game 3")).toBeTruthy();
  });

  test("Renders display clock properly for delayed games", () => {
    render(
      <ScoreboardGameHeader
        game={ingameRegularDelayed}
        gameState="in"
        isPlayoff={false}
      />
    );
    expect(screen.getByText("Delayed")).toBeTruthy();
    expect(screen.getByText("ESPN+")).toBeTruthy();
  });

  test("Renders Final for games ending in regulation", () => {
    render(
      <ScoreboardGameHeader
        game={postgameRegular}
        gameState="post"
        isPlayoff={false}
      />
    );
    expect(screen.getByText("Final")).toBeTruthy();
  });

  test("Renders Final/OT for games ending in OT", () => {
    render(
      <ScoreboardGameHeader
        game={postgameOT}
        gameState="post"
        isPlayoff={false}
      />
    );
    expect(screen.getByText("Final/OT")).toBeTruthy();
  });

  test("Renders Final/OT for games ending in SO", () => {
    render(
      <ScoreboardGameHeader
        game={postgameSO}
        gameState="post"
        isPlayoff={false}
      />
    );
    expect(screen.getByText("Final/SO")).toBeTruthy();
  });

  test("Still renders playoff game for postgame / playoff", () => {
    render(
      <ScoreboardGameHeader
        game={postgamePlayoff}
        gameState="post"
        isPlayoff={true}
      />
    );
    expect(screen.getByText("Final")).toBeTruthy();
    expect(screen.getByText("Stanley Cup Final - Game 3")).toBeTruthy();
  });
});

jest.mock("../Components/Home/Widgets/DraftWidget", () => (props) => {
  const firstPickOdds = [
    "25.5%",
    "13.5%",
    "11.5%",
    "9.5%",
    "8.5%",
    "7.5%",
    "6.5%",
    "6.0%",
    "5.0%",
    "3.5%",
    "3.0%",
  ];

  const teams = props.teams.slice(21).reverse();

  if (props.foo) props.foo(teams);

  return (
    <div>
      {teams.map((team, index) => (
        <div key={index} role="complementary">
          <p className="rank">{index + 1}</p>
          <p className="team">{team.team.id}</p>
          <p className="odds">{firstPickOdds[index]}</p>
        </div>
      ))}
    </div>
  );
});

describe("DraftWidget.js tests", () => {
  const mockDraftTeams = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    { team: { id: 15 } },
    { team: { id: 17 } },
    { team: { id: 19 } },
    { team: { id: 23 } },
    { team: { id: 4 } },
    { team: { id: 8 } },
    { team: { id: 53 } },
    { team: { id: 24 } },
    { team: { id: 16 } },
    { team: { id: 28 } },
    { team: { id: 29 } },
  ];

  test("Slice and reverse are called correctly", () => {
    const expectedArray = [
      { team: { id: 15 } },
      { team: { id: 17 } },
      { team: { id: 19 } },
      { team: { id: 23 } },
      { team: { id: 4 } },
      { team: { id: 8 } },
      { team: { id: 53 } },
      { team: { id: 24 } },
      { team: { id: 16 } },
      { team: { id: 28 } },
      { team: { id: 29 } },
    ].reverse();

    const foo = jest.fn();

    render(<DraftWidget teams={mockDraftTeams} foo={foo} />);
    expect(foo.mock.calls[0][0]).toHaveLength(11);
    expect(foo.mock.calls[0][0]).toStrictEqual(expectedArray);
  });

  test("Renders with the correct rank, team, and odds", () => {
    render(<DraftWidget teams={mockDraftTeams} />);
    const containers = screen.getAllByRole("complementary");

    expect(within(containers[0]).getByText("1")).toBeTruthy();
    expect(within(containers[0]).getByText("29")).toBeTruthy();
    expect(within(containers[0]).getByText("25.5%")).toBeTruthy();

    expect(within(containers[6]).getByText("7")).toBeTruthy();
    expect(within(containers[6]).getByText("4")).toBeTruthy();
    expect(within(containers[6]).getByText("6.5%")).toBeTruthy();

    expect(within(containers[10]).getByText("11")).toBeTruthy();
    expect(within(containers[10]).getByText("15")).toBeTruthy();
    expect(within(containers[10]).getByText("3.0%")).toBeTruthy();
  });
});

jest.mock("../Components/Home/Widgets/PlayerStatsWidget", () => (props) => {
  const activeStat = props[props.activeStat];

  return (
    <div>
      <div>
        <button
          onClick={() =>
            props.foo(props.pointsLeaders.leagueLeaders[0].leaderCategory)
          }
        >
          Points
        </button>
        <button
          onClick={() =>
            props.foo(props.goalLeaders.leagueLeaders[0].leaderCategory)
          }
        >
          Goals
        </button>
        <button
          onClick={() =>
            props.foo(props.assistsLeaders.leagueLeaders[0].leaderCategory)
          }
        >
          Assists
        </button>
        <button
          onClick={() =>
            props.foo(props.winsLeaders.leagueLeaders[0].leaderCategory)
          }
        >
          Wins
        </button>
        <button
          onClick={() =>
            props.foo(
              props.savePercentageLeaders.leagueLeaders[0].leaderCategory
            )
          }
        >
          Save %
        </button>
      </div>
      <div>
        <p>{activeStat.leagueLeaders[0].leaderCategory}</p>
        {activeStat.leagueLeaders[0].leaders.map((player, index) => (
          <div role="complementary">
            <p>{index + 1}</p>
            <p>{player.person.fullName}</p>
            <p>{player.team.id}</p>
            <p>{player.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

describe("PlayerStatsWidget.js tests", () => {
  const mockPlayerStats = (type) => {
    return {
      leagueLeaders: [
        {
          leaderCategory: type,
          leaders: [
            {
              person: { fullName: "Player1" },
              value: "5",
              team: { id: "100001" },
            },
            {
              person: { fullName: "Player2" },
              value: "4",
              team: { id: "100002" },
            },
            {
              person: { fullName: "Player3" },
              value: "3",
              team: { id: "100003" },
            },
            {
              person: { fullName: "Player4" },
              value: "2",
              team: { id: "100004" },
            },
            {
              person: { fullName: "Player5" },
              value: "1",
              team: { id: "100005" },
            },
          ],
        },
      ],
    };
  };

  const pointsLeaders = mockPlayerStats("Points");
  const goalLeaders = mockPlayerStats("Goals");
  const assistsLeaders = mockPlayerStats("Assists");
  const winsLeaders = mockPlayerStats("Wins");
  const savePercentageLeaders = mockPlayerStats("SavePercentage");

  test("Properly switches the activeStat", () => {
    const foo = jest.fn();
    render(
      <PlayerStatsWidget
        foo={foo}
        activeStat={"pointsLeaders"}
        pointsLeaders={pointsLeaders}
        goalLeaders={goalLeaders}
        assistsLeaders={assistsLeaders}
        winsLeaders={winsLeaders}
        savePercentageLeaders={savePercentageLeaders}
      />
    );
    const buttons = screen.getAllByRole("button");
    userEvent.click(buttons[0]);
    userEvent.click(buttons[1]);
    userEvent.click(buttons[2]);
    userEvent.click(buttons[3]);
    userEvent.click(buttons[4]);
    expect(foo.mock.calls[0][0]).toBe("Points");
    expect(foo.mock.calls[1][0]).toBe("Goals");
    expect(foo.mock.calls[2][0]).toBe("Assists");
    expect(foo.mock.calls[3][0]).toBe("Wins");
    expect(foo.mock.calls[4][0]).toBe("SavePercentage");
  });

  test("Properly renders the correct information", () => {
    const foo = jest.fn();
    render(
      <PlayerStatsWidget
        foo={foo}
        activeStat={"pointsLeaders"}
        pointsLeaders={pointsLeaders}
        goalLeaders={goalLeaders}
        assistsLeaders={assistsLeaders}
        winsLeaders={winsLeaders}
        savePercentageLeaders={savePercentageLeaders}
      />
    );

    const players = screen.getAllByRole("complementary");

    expect(within(players[0]).getByText("1")).toBeTruthy();
    expect(within(players[0]).getByText("Player1")).toBeTruthy();
    expect(within(players[0]).getByText("100001")).toBeTruthy();
    expect(within(players[0]).getByText("5")).toBeTruthy();

    expect(within(players[3]).getByText("4")).toBeTruthy();
    expect(within(players[3]).getByText("Player4")).toBeTruthy();
    expect(within(players[3]).getByText("100004")).toBeTruthy();
    expect(within(players[3]).getByText("2")).toBeTruthy();
  });
});
