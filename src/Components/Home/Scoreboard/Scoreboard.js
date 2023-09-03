import ScoreboardGame from './ScoreboardGame';
import uniqid from 'uniqid';
import { StyledScoreboard } from '../../../StyledComponents/Home/ScoreboardComponents';

/* Props:
    gameInformation ( information from all games )
*/

export default function Scoreboard(props) {

    console.log(props);
    console.log(Boolean(props.gameInformation));
        
    return (
        (props.gameInformation)
        ? <StyledScoreboard>
            {
                props.gameInformation.events.map((game) => (
                    <ScoreboardGame key = { uniqid() } game = { game } logos = { props.logos } />
                ))
            }
          </StyledScoreboard>
        : <></>
    );
}