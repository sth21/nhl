import { StyledScoreboardInfo, StyledTime } from "../../StyledComponents/Home/ScoreboardComponents";

/* Props: 
    game ( one games data )
    gameState ( "pre" || "in" || "post" )
    isPlayoff ( boolean )
*/

export default function ScoreboardGameHeader(props) {

    const gameInfo = props.game.competitions[0];

    function appendSuperscriptOrdinal(number) {
        if ( number === 1 ) {
            return number + "st";
        } else if ( number === 2 ) {
            return number + "nd";
        } else if (number === 3 ) {
            return number + "rd";
        } else if ( number === 4 ) {
            return "OT";
        } else {
            return "SO";
        }
    }

    function utcToLocal(timeString) {
        const utc = new Date(timeString);
        return utc.toLocaleString('en-US', 
            { 
                hour: 'numeric', 
                minute: 'numeric', 
                hour12: true,
            }
        );
    }

    return (
        <div>
            {
                ( props.gameState === "pre" )
                ? <StyledScoreboardInfo>
                    <p>{ utcToLocal(props.game.date) }</p>
                    <p>{ (props.isPlayoff) ? gameInfo.notes[0].headline : gameInfo.broadcasts[0].names[0] } </p>
                  </StyledScoreboardInfo>
                : ( props.gameState === "in" )
                    ? <StyledScoreboardInfo>
                        <StyledTime>{ `${props.game.status.displayClock} - ${appendSuperscriptOrdinal(props.game.status.period)}`}</StyledTime>
                        <p>{ (props.isPlayoff) ? gameInfo.notes[0].headline : gameInfo.broadcasts[0].names[0] }</p>
                      </StyledScoreboardInfo>
                    : <StyledScoreboardInfo>
                        <p>{ props.game.status.type.detail }</p>
                      </StyledScoreboardInfo>
            }
        </div>
    );

}