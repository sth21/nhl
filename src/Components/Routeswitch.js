import { GlobalStyle } from "../StyledComponents/General/GeneralComponents";
import { Helmet } from "react-helmet";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Scores from "./Scores/Scores";
import Schedule from "./Schedule";
import Standings from "./Standings/Standings";
import Stats from "./Stats";
import Draft from "./Draft/Draft";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Routeswitch() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sintony:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="./favicon.ico"></link>
      </Helmet>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/draft" element={<Draft />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
