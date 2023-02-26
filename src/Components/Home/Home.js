import useFetch from '../../Utils/useFetch';
import Scoreboard from './Scoreboard';
import Nav from './Nav';

export default function Home() {
    
    const gameInformation = useFetch("https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard", 60000);

    return (
        <>
            <Nav />
            <Scoreboard gameInformation = { gameInformation } />
        </>
    );
    
}