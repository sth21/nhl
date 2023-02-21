import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Scores from './Scores';
import Schedule from './Schedule';
import Standings from './Standings';
import Stats from './Stats';
import Players from './Players';
import Fantasy from './Fantasy';
import Scoreboard from './Scoreboard';

export default function Routeswitch() {
    return (
        <BrowserRouter>
            <Scoreboard />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/scores" element={ <Scores /> } />
                <Route path="/schedule" element={ <Schedule /> } />
                <Route path="/standings" element={ <Standings /> } />
                <Route path="/stats" element={ <Stats /> } />
                <Route path="/players" element={ <Players /> } />
                <Route path="/fantasy" element={ <Fantasy /> } />
            </Routes>
        </BrowserRouter>
    );
}