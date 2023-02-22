import { useState, useEffect } from 'react';
import useFetch from '../Utils/useFetch';

export default function Scoreboard() {
    const [ gameInformation ] = useFetch("http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard", 60000);
    
    useEffect(() => {
        if ( gameInformation === null ) return;
        console.log(gameInformation.events);
    }, [ gameInformation ]);

    function utcToLocal(timeString) {
        const utc = new Date(timeString);
        return utc.toLocaleString('en-US', { hour: 'numeric', 
            minute: 'numeric', hour12: true, timeZoneName: 'short' });
    }

    const render = () => {
        return (
            ( gameInformation !== null )
            ? <div>
                {
                    gameInformation.events.map((game) => (
                        <div>
                            <div>
                                <p>{ utcToLocal(game.date) }</p>
                                <p>{ game.competitions[0].venue.fullName }</p>
                            </div>
                            <div>
                                <div>
                                    <p>{`${game.competitions[0].competitors[0].team.location} ${game.competitions[0].competitors[0].team.name}`}</p>
                                    <p>{ game.competitions[0].competitors[0].score }</p>
                                </div>
                                <div>
                                    <p>{`${game.competitions[0].competitors[1].team.location} ${game.competitions[0].competitors[1].team.name}`}</p>
                                    <p>{ game.competitions[0].competitors[1].score }</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
              </div>
            : <p>No games today</p>
        )
    };

    return render();
}