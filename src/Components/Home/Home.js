import useFetch from '../../Utils/useFetch';
import Scoreboard from './Scoreboard';

export default function Home() {
    const gameInformation = useFetch("https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard", 60000);
    
    return (
        <>
            <Scoreboard gameInformation = { gameInformation } />
            <div style={{ height: "100px", width: "100%", backgroundColor: "var(--black)" }}></div>
        </>
    );
}