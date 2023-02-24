import useFetch from '../Utils/useFetch';
import { useEffect } from 'react';
import Scoreboard from './Scoreboard';

export default function Home() {
    const gameInformation = useFetch("https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard?dates=20230224", 60000);
    const yesterday = useFetch("https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard?dates=20220513");

    useEffect(() => {
        console.log(gameInformation);
    }, [ gameInformation ]);

    useEffect(() => {
        if (!yesterday) return;
        console.log(yesterday.events);
    }, [ yesterday ]);
    
    return (
        <Scoreboard gameInformation = { gameInformation } />
    );
}