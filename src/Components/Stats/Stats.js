import moment from "moment";
import { useState } from "react";
import {
  StyledPageWrapper,
  StyledPageContentWrapper,
  StyledPageHeader,
} from "../../StyledComponents/General/GeneralComponents";
import TeamTable from "./TeamTable";
import SkaterTable from "./SkaterTable";

export default function Stats() {
  const currentYear = moment().year();

  const [tableSettings, setTableSettings] = useState({
    type: "Skater",
    season:
      moment().month() > 8
        ? `${currentYear}${currentYear + 1}`
        : `${currentYear - 1}${currentYear}`,
  });

  return tableSettings ? (
    <StyledPageWrapper>
      <StyledPageContentWrapper>
        <StyledPageHeader>
          {tableSettings.type + " Statistics"}
        </StyledPageHeader>
        {tableSettings.type === "Team" ? (
          <TeamTable tableSettings={tableSettings} />
        ) : tableSettings.type === "Skater" ? (
          <SkaterTable tableSettings={tableSettings} />
        ) : (
          <></>
        )}
      </StyledPageContentWrapper>
    </StyledPageWrapper>
  ) : (
    <></>
  );
}
