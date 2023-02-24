/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';
import useGameLogos from '../Utils/useGameLogos';
import uniqid from 'uniqid';

export default function Scoreboard(props) {
    const [ gameLogos, setGameLogos ] = useGameLogos(props.gameInformation);

    useEffect(() => console.log(gameLogos), [ gameLogos ]);

    function utcToLocal(timeString) {
        const utc = new Date(timeString);
        return utc.toLocaleString('en-US', { hour: 'numeric', 
            minute: 'numeric', hour12: true, timeZoneName: 'short' });
    }

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

    function scoreboardHeader(game) {
        const status = game.status.type.state;
        if ( game.status.type.state === "pre" ) {
            return (
              <div>
                <p>{ utcToLocal(game.date) }</p>
                <p>{ game.competitions[0].venue.fullName }</p>
              </div>
            );
        } else if ( status === "in" ) {
            return (
              <div>
                <p>{ `${game.status.displayClock} - ${appendSuperscriptOrdinal(game.status.period)}`}</p>
                <p>{ game.competitions[0].broadcasts[0].names[0] }</p>
              </div>
            );
        } else {
            return (
                <p>Final</p>
            );
        }
    }

    const render = () => {
        return (
            ( props.gameInformation )
            ? <div>
                {
                    props.gameInformation.events.map((game, index) => (
                        <div key={ uniqid() } style={{ padding: '10em 0em' }}>
                            { scoreboardHeader(game) }
                            <div>
                                <div>
                                    <p>{`${game.competitions[0].competitors[0].team.location} ${game.competitions[0].competitors[0].team.name}`}</p>
                                    <p>{ game.competitions[0].competitors[0].score }</p>
                                    <img src={ (gameLogos[index]) ? gameLogos[index][0] : "#" } alt="home team logo"></img>
                                </div>
                                <div>
                                    <p>{`${game.competitions[0].competitors[1].team.location} ${game.competitions[0].competitors[1].team.name}`}</p>
                                    <p>{ game.competitions[0].competitors[1].score }</p>
                                    <img src={ (gameLogos[index]) ? gameLogos[index][1] : "#" } alt="away team logo"></img>
                                </div>
                            </div>
                        </div>
                    ))
                }
              </div>
            : <></>
        )
    };

    return render();
}