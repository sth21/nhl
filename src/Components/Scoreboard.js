import ScoreboardGame from './ScoreboardGame';
import uniqid from 'uniqid';

/* Props:
    gameInformation ( information from all games )

*/

export default function Scoreboard(props) {
        
    return (
        ( props.gameInformation )
        ? <div>
            {
                props.gameInformation.events.map((game) => (
                    <ScoreboardGame key = { uniqid() } game = { game } />
                ))
            }
            </div>
        : <></>
    );

}