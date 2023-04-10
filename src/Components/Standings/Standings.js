import {
  StyledPageHeader,
  StyledPageWrapper,
  StyledPageContentWrapper,
} from "../../StyledComponents/General/GeneralComponents";
import StandingsOptionsContainer from "./StandingsOptionsContainer";
import StandingsYearOptions from "./StandingsYearOptions";
import StandingsTable from "./StandingsTable";
import StandingsLegend from "./StandingsLegend";

import { useState, useMemo } from "react";
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
  const sortedStandings = useMemo(() => {
    if (!(standings && standingsOptions)) return null;
    if (!standingsOptions.sortInfo) return standings;
    const bool =
      standingsOptions.sortInfo.option === "D"
        ? (a, b) => b - a
        : (a, b) => a - b;
    standings.records.map((section) => {
      const statFn = (team) =>
        standingsOptions.sortInfo.stat
          .split(".")
          .reduce((obj, key) => obj[key], team);
      return {
        ...section,
        teamRecords: section.teamRecords.sort((teamA, teamB) =>
          bool(statFn(teamA), statFn(teamB))
        ),
      };
    });
    return standings;
  }, [standings, standingsOptions]);

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
        {sortedStandings && standingsOptions && setStandingsOptions ? (
          <StandingsTable
            standingsOptions={standingsOptions}
            setStandingsOptions={setStandingsOptions}
            data={sortedStandings}
            logos={nhlLogos}
          />
        ) : (
          <></>
        )}
        <StandingsLegend />
      </StyledPageContentWrapper>
    </StyledPageWrapper>
  ) : (
    <></>
  );
}
