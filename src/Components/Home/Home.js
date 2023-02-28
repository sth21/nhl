import useFetch from '../../Utils/useFetch';
import Scoreboard from './Scoreboard/Scoreboard';
import WidgetContainer from './Widgets/WidgetContainer';

import { useEffect } from 'react';

export default function Home() {
    
    // For Scoreboard
    const gameInformation = useFetch("https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard?dates=20220224", 60000);

    useEffect(() => { if (gameInformation) console.log(gameInformation.events); }, [ gameInformation ])

    return (
        <>
            <Scoreboard gameInformation = { gameInformation } />
            <WidgetContainer />
        </>
    );

}