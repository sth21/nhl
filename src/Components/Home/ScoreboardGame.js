import useLogo from '../../Utils/useLogo';
import ScoreboardGameHeader from './ScoreboardGameHeader';
import { StyledScoreboardGameWrapper, StyledScoreboardGameBody, StyledScoreboardInfo, StyledScoreboardTeam } from '../../StyledComponents/Home/ScoreboardComponents';

/* Props:
    game ( one games data )
*/

export default function ScoreboardGame(props) {
    
    const homeLogo = useLogo(props.game.competitions[0].competitors[0].id);
    const awayLogo = useLogo(props.game.competitions[0].competitors[1].id);
    const gameInfo = props.game.competitions[0];

    return (
        <StyledScoreboardGameWrapper>
            <ScoreboardGameHeader game = { props.game } gameState = { props.game.status.type.state } isPlayoff = {!!gameInfo.series} />
            <StyledScoreboardGameBody>
                <StyledScoreboardInfo>
                    <StyledScoreboardTeam>
                        <img src={ (homeLogo) ? homeLogo : "#" } alt="home team logo"></img>
                        <p>{gameInfo.competitors[0].team.abbreviation}</p>
                    </StyledScoreboardTeam>
                    <p>{ (props.game.status.type.state === "pre") ? gameInfo.competitors[0].records[0].summary : gameInfo.competitors[0].score }</p>
                </StyledScoreboardInfo>
                <StyledScoreboardInfo>
                    <StyledScoreboardTeam>
                        <img src={ (awayLogo) ? awayLogo : "#" } alt="away team logo"></img>
                        <p>{gameInfo.competitors[1].team.abbreviation}</p>
                    </StyledScoreboardTeam>
                    <p>{ (props.game.status.type.state === "pre") ? gameInfo.competitors[1].records[0].summary : gameInfo.competitors[1].score }</p>
                </StyledScoreboardInfo>
            </StyledScoreboardGameBody>
        </StyledScoreboardGameWrapper>
    );

}