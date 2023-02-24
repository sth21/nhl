import useLogo from '../Utils/useLogo';
import ScoreboardGameHeader from './ScoreboardGameHeader';

export default function ScoreboardGame(props) {
    const homeLogo = useLogo(props.game.competitions[0].competitors[0].id);
    const awayLogo = useLogo(props.game.competitions[0].competitors[1].id);

    return (
        <div style={{ padding: '10em 0em' }}>
            <ScoreboardGameHeader game = { props.game } gameState = { props.game.status.type.state } isPlayoff = {!!props.game.competitions[0].series} />
            <div>
                <div>
                    <img src={ (homeLogo) ? homeLogo : "#" } alt="home team logo"></img>
                    <p>{props.game.competitions[0].competitors[0].team.abbreviation}</p>
                    <p>{ (props.game.status.type.state === "pre") ? props.game.competitions[0].competitors[0].records[0].summary : props.game.competitions[0].competitors[0].score }</p>
                </div>
                <div>
                    <img src={ (awayLogo) ? awayLogo : "#" } alt="away team logo"></img>
                    <p>{props.game.competitions[0].competitors[1].team.abbreviation}</p>
                    <p>{ (props.game.status.type.state === "pre") ? props.game.competitions[0].competitors[1].records[0].summary : props.game.competitions[0].competitors[1].score }</p>
                </div>
            </div>
        </div>
    );

}