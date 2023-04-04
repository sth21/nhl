import {
  StyledPageHeader,
  StyledPageWrapper,
  StyledPageContentWrapper,
} from "../../StyledComponents/General/GeneralComponents";
import StandingsOptionsContainer from "./StandingsOptionsContainer";
import StandingsYearOptions from "./StandingsYearOptions";
import StandingsTable from "./StandingsTable";

import { useState } from "react";
import useLogos from "../../Utils/useLogos";
import useFetch from "../../Utils/useFetch";

export default function Standings() {
  const nhlLogos = useLogos("nhl");
  const currentYear =
    new Date().getMonth() >= 10
      ? new Date().getFullYear()
      : new Date().getFullYear() - 1;
  const [standingsOptions, setStandingsOptions] = useState({
    type: "byLeague",
    year: currentYear,
  });
  const standings = useFetch(
    `https://statsapi.web.nhl.com/api/v1/standings/${
      standingsOptions.type
    }?season=${standingsOptions.year}${parseInt(standingsOptions.year, 10) + 1}`
  );

  return standings ? (
    <StyledPageWrapper>
      <StyledPageContentWrapper>
        <StyledPageHeader>League Standings</StyledPageHeader>
        {standingsOptions ? (
          <>
            <StandingsYearOptions
              year={standingsOptions.year}
              currentYear={currentYear}
              setStandingsOptions={setStandingsOptions}
            />
            <StandingsOptionsContainer
              type={standingsOptions.type}
              year={standingsOptions.year}
              setStandingsOptions={setStandingsOptions}
            />
          </>
        ) : (
          <></>
        )}
        {standings ? (
          <StandingsTable data={standings} logos={nhlLogos} />
        ) : (
          <></>
        )}
      </StyledPageContentWrapper>
    </StyledPageWrapper>
  ) : (
    <></>
  );
}
