import { StyledScoreboardInfo, StyledTime } from "../../../StyledComponents/Home/ScoreboardComponents";

/* Props: 
    game ( one games data )
    gameState ( "pre" || "in" || "post" )
    isPlayoff ( boolean )
*/

export default function ScoreboardGameHeader(props) {

    const gameInfo = props.game.competitions[0];

    function appendSuperscriptOrdinal(period) {
        if ( period === 1 ) {
            return period + "st";
        } else if ( period === 2 ) {
            return period + "nd";
        } else if (period === 3 ) {
            return period + "rd";
        } else if ( period === 4 ) {
            return "OT";
        } else if (period === 5) {
            return "SO";
        } else {
            return "Delayed";
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
                    <p>{ (props.isPlayoff) ? gameInfo.notes[0].headline : gameInfo.broadcasts[0] ? gameInfo.broadcasts[0].names[0] : "" }</p>
                  </StyledScoreboardInfo>
                : ( props.gameState === "in" )
                    ? <StyledScoreboardInfo>
                        <StyledTime>{ `${ (props.game.status.period !== 0) ? `${props.game.status.displayClock} - ` : ""} ${appendSuperscriptOrdinal(props.game.status.period)}`}</StyledTime>
                        <p>{ (props.isPlayoff) ? gameInfo.notes[0].headline : gameInfo.broadcasts[0] ? gameInfo.broadcasts[0].names[0] : "" }</p>
                      </StyledScoreboardInfo>
                    : <StyledScoreboardInfo>
                        <p>{ props.game.status.type.detail }</p>
                        <p>{ (props.isPlayoff) ? gameInfo.notes[0].headline : "" }</p>
                      </StyledScoreboardInfo>
            }
        </div>
    );

}