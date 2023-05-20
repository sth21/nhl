import moment from "moment";
import useFetch from "./../../Utils/useFetch";
import { useState } from "react";
import {
  StyledPageWrapper,
  StyledPageContentWrapper,
  StyledPageHeader,
} from "../../StyledComponents/General/GeneralComponents";
import TeamTable from "./TeamTable";

export default function Stats() {
  const currentYear = moment().year();

  const [tableSettings, setTableSettings] = useState({
    type: "Team",
    season:
      moment().month() > 8
        ? `${currentYear}${currentYear + 1}`
        : `${currentYear - 1}${currentYear}`,
  });

  const teamData = useFetch(
    `https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats&season=${tableSettings.season}`
  );

  return tableSettings && teamData ? (
    <StyledPageWrapper>
      <StyledPageContentWrapper>
        <StyledPageHeader>
          {tableSettings.type + " Statistics"}
        </StyledPageHeader>
        <TeamTable teamData={teamData} tableSettings={tableSettings} />
      </StyledPageContentWrapper>
    </StyledPageWrapper>
  ) : (
    <></>
  );
}
