import {
  StyledTableContainer,
  StyledPageHeader,
  StyledPageWrapper,
  StyledPageContentWrapper,
} from "../../StyledComponents/General/GeneralComponents";
import StandingsOptionsContainer from "./StandingsOptionsContainer";
import StandingsYearOptions from "./StandingsYearOptions";

import { useState } from "react";
import useLogos from "../../Utils/useLogos";
import useFetch from "../../Utils/useFetch";

export default function Standings() {
  const nhlLogos = useLogos("nhl");
  const [standingType, setStandingType] = useState("byLeague");
  const [year, setYear] = useState(parseInt(new Date().getFullYear(), 10));
  const standings = useFetch(
    `https://statsapi.web.nhl.com/api/v1/standings/${standingType}?season=${year}${
      parseInt(year, 10) + 1
    }`
  );

  return standings ? (
    <StyledPageWrapper>
      <StyledPageContentWrapper>
        <StyledPageHeader>League Standings</StyledPageHeader>
        <StandingsYearOptions year={year} setYear={setYear} />
        {year && setStandingType ? (
          <StandingsOptionsContainer
            year={year}
            setStandingType={setStandingType}
          />
        ) : (
          <></>
        )}
        <StyledTableContainer></StyledTableContainer>
      </StyledPageContentWrapper>
    </StyledPageWrapper>
  ) : (
    <></>
  );
}
