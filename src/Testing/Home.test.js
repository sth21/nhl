/* Tests:
    Home.js
    
    WidgetContainer.js
        DraftWidget.js
        FantasyWidget.js
        HeadlinesWidget.js
        PlayersWidget.js
        StandingsWidget.js
        StatsWidget.js
*/

import Scoreboard from '../Components/Home/Scoreboard/Scoreboard';
import ScoreboardGame from '../Components/Home/Scoreboard/ScoreboardGame';
import ScoreboardGameHeader from '../Components/Home/Scoreboard/ScoreboardGameHeader';
import { render, screen } from '@testing-library/react';
import MockData from './MockData';

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
        render(<Scoreboard gameInformation = {{ events: [ pregameRegular, ingameRegular, postgameRegular ]}} />);
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
    
    if (props.ScoreboardGameHeader) props.ScoreboardGameHeader({  
        game: props.game,
        gameState: props.game.status.type.state,
        isPlayoff: !!gameInfo.series,
    });
    
    return (
        <div role="complementary">
            <div>
                <div>
                    <div>
                        <p className="abbreviation">{ gameInfo.competitors[0].team.abbreviation }</p>
                    </div>
                    <p data-testid="score">{ (props.game.status.type.state === "pre") ? gameInfo.competitors[0].records[0].summary : gameInfo.competitors[0].score }</p>
                </div>
                <div>
                    <div>
                        <p className="abbreviation">{ gameInfo.competitors[1].team.abbreviation }</p>
                    </div>
                    <p data-testid="score">{ (props.game.status.type.state === "pre") ? gameInfo.competitors[1].records[0].summary : gameInfo.competitors[1].score }</p>
                </div>
            </div>
        </div>
    );
});

describe("ScoreboardGame.js tests", () => {
    test("Renders component with correct abbreviations", () => {
        render(<ScoreboardGame game = { ingameRegular }/>);
        expect(screen.getByText("TOR")).toBeTruthy();
        expect(screen.getByText("MIN")).toBeTruthy();
        expect(screen.queryByText("BUF")).toBeFalsy();
    });

    test("Renders with records if pregame", () => {
        render(<ScoreboardGame game = { pregameRegular } />);
        expect(screen.getByText("33-14-4")).toBeTruthy();
        expect(screen.getByText("31-15-3")).toBeTruthy();
        expect(screen.queryByText("22-8-12")).toBeFalsy();
    });

    test("Renders with scores if not pregame", () => {
        render(<ScoreboardGame game = { pregameRegular } />);
        const scores = screen.getAllByTestId("score");
        expect(scores[0].textContent).toBe("33-14-4")
        expect(scores[1].textContent).toBe("31-15-3");
    });

    test("Calls ScoreboardGameHeader with correct props", () => {
        const foo = jest.fn();
        
        render(<ScoreboardGame game = { pregameRegular } useGameLogo = { foo } />);
        expect(foo.mock.calls[0][0]).toBe(14);
        expect(foo.mock.calls[1][0]).toBe(10);
    });

    test("Calls useGameLogo with correct props", () => {
        const foo = jest.fn();
        
        render(<ScoreboardGame game = { pregameRegular } ScoreboardGameHeader = { foo } />);
        expect(foo.mock.calls[0][0]).toMatchObject({
            game: pregameRegular,
            gameState: "pre",
            isPlayoff: false,
        });
    });
});

describe("ScoreboardGameHeader.js tests", () => {
    test("Renders time of game and broadcast for pregame / regular season", () => {
        render(<ScoreboardGameHeader game = { pregameRegular } gameState = "pre" isPlayoff = { false } />);
        expect(screen.getByText("7:00 PM")).toBeTruthy();
        expect(screen.getByText("ESPN+")).toBeTruthy();
    });

    test("Renders time of game and playoff game for pregame / playoff", () => {
        render(<ScoreboardGameHeader game = { pregamePlayoff } gameState = "pre" isPlayoff = { true } />);
        expect(screen.getByText("7:00 PM")).toBeTruthy();
        expect(screen.getByText("Stanley Cup Final - Game 3")).toBeTruthy();
    });

    test("Renders display clock, period, and broadcast for ingame / regular season", () => {
        render(<ScoreboardGameHeader game = { ingameRegular } gameState = "in" isPlayoff = { false } />);
        expect(screen.getByText("00:00 - 1st")).toBeTruthy();
        expect(screen.getByText("ESPN+")).toBeTruthy();
    });

    test("Renders display clock, period, and playoff game for ingame / playoff", () => {
        render(<ScoreboardGameHeader game = { ingamePlayoff } gameState = "in" isPlayoff = { true } />);
        expect(screen.getByText("00:00 - 1st")).toBeTruthy();
        expect(screen.getByText("Stanley Cup Final - Game 3")).toBeTruthy();
    });

    test("Renders display clock properly for delayed games", () => {
        render(<ScoreboardGameHeader game = { ingameRegularDelayed } gameState = "in" isPlayoff = { false } />);
        expect(screen.getByText("Delayed")).toBeTruthy();
        expect(screen.getByText("ESPN+")).toBeTruthy();
    });

    test("Renders Final for games ending in regulation", () => {
        render(<ScoreboardGameHeader game = { postgameRegular } gameState = "post" isPlayoff = { false } />);
        expect(screen.getByText("Final")).toBeTruthy();
    });

    test("Renders Final/OT for games ending in OT", () => {
        render(<ScoreboardGameHeader game = { postgameOT } gameState = "post" isPlayoff = { false } />);
        expect(screen.getByText("Final/OT")).toBeTruthy();
    });

    test("Renders Final/OT for games ending in SO", () => {
        render(<ScoreboardGameHeader game = { postgameSO } gameState = "post" isPlayoff = { false } />);
        expect(screen.getByText("Final/SO")).toBeTruthy();
    });

    test("Still renders playoff game for postgame / playoff", () => {
        render(<ScoreboardGameHeader game = { postgamePlayoff } gameState = "post" isPlayoff = { true } />);
        expect(screen.getByText("Final")).toBeTruthy();
        expect(screen.getByText("Stanley Cup Final - Game 3")).toBeTruthy();
    });
});