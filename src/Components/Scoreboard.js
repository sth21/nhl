import ScoreboardGame from './ScoreboardGame';
import uniqid from 'uniqid';

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
        )
}