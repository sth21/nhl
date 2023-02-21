import { useState, useEffect } from 'react';
import useFetch from '../Utils/useFetch';

export default function Scoreboard() {
    const [ gameData ] = useFetch("https://statsapi.web.nhl.com/api/v1/schedule");
    
    useEffect(() => {
        if ( gameData === null ) return;
        console.log(gameData.dates[0].games);
    }, [ gameData ]);

    function utcToLocal(timeString) {
        const utc = new Date(timeString);
        return utc.toLocaleString('en-US', { hour: 'numeric', 
            minute: 'numeric', hour12: true, timeZoneName: 'short' });
    }

    const render = () => {
        return (
            ( gameData !== null )
            ? <div>
                {
                    gameData.dates[0].games.map((game) => (
                        <div>
                            <div>
                                <p>{ utcToLocal(game.gameDate) }</p>
                                <p>{ game.venue.name }</p>
                            </div>
                            <div>
                                <p>{ game.teams.home.team.name }</p>
                                <p>{ game.teams.away.team.name }</p>
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