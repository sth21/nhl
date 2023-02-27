import { GlobalStyle } from '../StyledComponents/General/GeneralComponents';
import { Helmet } from 'react-helmet';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Scores from './Scores';
import Schedule from './Schedule';
import Standings from './Standings';
import Stats from './Stats';
import Players from './Players';
import Fantasy from './Fantasy';
import Nav from './Nav';

export default function Routeswitch() {
    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Sintony:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>
            <GlobalStyle />
            <BrowserRouter>
                <Nav />
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
        </>
    );
}