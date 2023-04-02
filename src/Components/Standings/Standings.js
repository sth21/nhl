import {
  StyledPageHeader,
  StyledPageWrapper,
  StyledPageContentWrapper,
} from "../../StyledComponents/General/GeneralComponents";
import StandingsOptionsContainer from "./StandingsOptionsContainer";
import StandingsYearOptions from "./StandingsYearOptions";
import StandingsTable from "./StandingsTable";

import { useState, useEffect } from "react";
import useLogos from "../../Utils/useLogos";
import useFetch from "../../Utils/useFetch";

export default function Standings() {
  const nhlLogos = useLogos("nhl");
  const [standingType, setStandingType] = useState("byLeague");
  const [year, setYear] = useState(
    new Date().getMonth() >= 10
      ? new Date().getFullYear()
      : new Date().getFullYear() - 1
  );
  const standings = useFetch(
    `https://statsapi.web.nhl.com/api/v1/standings/${standingType}?season=${year}${
      parseInt(year, 10) + 1
    }`
  );

  useEffect(() => console.log(standings), [standings]);

  return standings ? (
    <StyledPageWrapper>
      <StyledPageContentWrapper>
        <StyledPageHeader>League Standings</StyledPageHeader>
        {year && setYear ? (
          <StandingsYearOptions year={year} setYear={setYear} />
        ) : (
          <></>
        )}
        {year && setStandingType ? (
          <StandingsOptionsContainer
            year={year}
            setStandingType={setStandingType}
          />
        ) : (
          <></>
        )}
        {standings && standingType === "byLeague" ? (
          <StandingsTable
            teams={standings.records[0].teamRecords}
            tableName="National Hockey League"
            logos={nhlLogos}
          />
        ) : (
          <></>
        )}
      </StyledPageContentWrapper>
    </StyledPageWrapper>
  ) : (
    <></>
  );
}
